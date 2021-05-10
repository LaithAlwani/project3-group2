const db = require("../models");

exports.createTeam = (req, res) => {
    const { _id, teamName, sport } = req.body;
    db.Team.create(
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
        db.User.findById(_id, (err, user) => {
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


exports.updatetnp = async (req, res, next) => {
    try {
      const id = req.params.id;
      const { teamName, sport } = req.body;
      const options = { new: true };
  
      const team = await db.Team.findByIdAndUpdate(
        id,
        { teamName, sport },
        options
      );
      res.send(team);
    } catch (err) {
      console.log(err);
      next();
    }
  };
  
  
  exports.getPlayersByTeamId = (req, res) => {
    db.Team.findById(req.params.id)
      .populate("players.player")
      .exec((err, team) => {
        if (err) {
          console.log(err);
          res.send("No teams found").status(500).end();
        }
        res.json(team);
      });
  };

  


exports.addMember = (req, res) => {
    const { searchInput, teamId } = req.body;
    db.User.findOne({ email: searchInput }, (err, user) => {
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
        db.Team.findById({ _id: teamId }, (err, team) => {
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





exports.deleteMember = (req, res) => {
    const teamId = req.body.teamId;
    db.User.findOne({ _id: req.params.playerId }, (err, user) => {
      if (err) {
        res.send("Cannot find Player").status(500).end();
      }
      const teamsList = user.teams.filter(
        (team) => team._id.toString() !== teamId.toString()
      );
      
      //remove user from Teams list
      db.Team.findById(teamId, (err, team) => {
        if (err) {
          res.send("Cannot find Team").status(500).end();
        }
        if (team.players.length > 1) {
          const playersList = team.players.filter(
            (player) => player.player.toString() !== user._id.toString()
            );
            team.players = playersList;
            team.save();
            user.teams = teamsList;
            user.save();
          res.json("Player Deleted");
        } else {
          res.json("please delete team");
        }
      });
    });
  };

  exports.deleteTeam = (req, res) => {
    db.Team.findById({ _id: req.params.teamId }, (err, team) => {
      if (err) {
        res.send("Cannot Delet Team").status(500).end();
      }
      team.players.forEach((player) => {
        db.User.findById(player.player._id, (err, user) => {
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
  