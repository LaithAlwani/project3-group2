const User = require("../models/user");

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send("No users found").status(500).end();
    }
    res.json(users);
  });
};

exports.getUsersTeams = (req, res) => {
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

// Update user profile
exports.updateUser = async (req, res, next) => {
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
