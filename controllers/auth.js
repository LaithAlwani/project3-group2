const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Team = require("../models/Team");
const sendEmail = require("../utils/sendEmail");
const { isRegExp } = require("util");
const { populate } = require("../models/User");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// Register
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("The email is not registered", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrlDev = `http://localhost:3000/passwordreset/${resetToken}`;
    const resetUrlProd = `https://group2-project3.herokuapp.com/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
    <h1>Password Reset</h1>
    <p> Seems like you forgot your password. Click on the link below to reset your password</p>
    <a href=${
      process.env.NODE_ENV === "production" ? resetUrlProd : resetUrlDev
    } clicktracking=off>${
      process.env.NODE_ENV === "production" ? resetUrlProd : resetUrlDev
    }</a>
    <p> If you did not forget your password, you can safely ignore this email.</p>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

// Reset User Password
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

// Update
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;
    const options = { new: true };

    const user = await User.findByIdAndUpdate(
      id,
      { username, email, password },
      options
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    next();
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};

exports.createTeam = (req, res) => {
  const { _id, teamName, sport } = req.body;
  Team.create(
    {
      teamName,
      sport,
      players: { player: _id, isAdmin: true },
    },
    (err, team) => {
      if (err) {
        console.log(err);
        return;
      }
      User.findById(_id, (err, user) => {
        if (err) {
          console.log(err);
        } else {
          user.teams.push(team._id);
          user.save();
        }
      });
      res.status(201).json({
        success: true,
        data: "Team Created",
      });
    }
  );
};

exports.getTeamsByUserId = (req, res) => {
  User.findById(req.params.id)
    .populate("teams")
    .exec((err, teams) => {
      if (err) {
        console.log(err);
        res.send("No teams found").status(500).end();
      }
      res.json(teams);
    });
};

exports.getPlayersByTeamId = (req, res) => {
  Team.findById(req.params.id)
    .populate("players.player")
    .exec((err, team) => {
      if (err) {
        console.log(err);
        res.send("No teams found").status(500).end();
      }
      res.json(team);
    });
};

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send("No users found").status(500).end();
    }
    res.json(users);
  });
};

exports.addMember = (req, res) => {
  const { searchInput, teamId } = req.body;
  User.findOne({ email: searchInput }, (err, user) => {
    if (err) {
      console.log(err);
      res.send("No user found").status(500).end();
    }
    if (user === null) {
      res.json("User not found");
      return;
    }
    if (!user.teams.includes(teamId)) {
      user.teams.push(teamId);
      user.save();
      Team.findById({ _id: teamId }, (err, team) => {
        if (err) {
          res.send("Team not found").status(500).end();
        }
        team.players.push({ player: user._id });
        team.save();
      });
      res.json("Member Added");
    } else {
      res.json("Already in team");
    }
  });
};

exports.deleteTeam = (req, res) => {
  Team.findById({ _id: req.params.teamId }, (err, team) => {
    if (err) {
      res.send("Cannot Delet Team").status(500).end();
    }
    team.players.forEach((player) => {
      User.findById(player.player._id, (err, user) => {
        const newTeams = user.teams.filter(
          (newTeam) => newTeam._id.toString() !== team._id.toString()
        );
        user.teams = newTeams;
        user.save();
      });
    });
    team.delete();
    console.log("team deleted");
    res.json("Team Deleted");
  });
};

exports.deleteMember = (req, res) => {
  const teamId = req.body.teamId;
  User.findOne({ _id: req.params.playerId }, (err, user) => {
    if (err) {
      res.send("Cannot find Player").status(500).end();
    }
    const teamsList = user.teams.filter(
      (team) => team._id.toString() !== teamId.toString()
    );
    user.teams = teamsList;
    user.save();

    //remove user from Teams list
    Team.findById(teamId, (err, team) => {
      if (err) {
        res.send("Cannot find Team").status(500).end();
      }
      if (team.players.length > 1) {
        const playersList = team.players.filter(
          (player) => player.player.toString() !== user._id.toString()
        );
        team.players = playersList;
        team.save();
        res.json("Player Deleted");
      } else {
        res.json("please delete team");
      }
    });
  });
};
