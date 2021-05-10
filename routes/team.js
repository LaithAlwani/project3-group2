const express = require("express");
const router = express.Router();
const multer = require("multer");

const teamController = require("../controllers/teamController");
const Team = require("../models/team");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./client/public/uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  let upload = multer({ storage, fileFilter });

router.route("/createteam").post(teamController.createTeam);

router.route("/:id/players").get(teamController.getPlayersByTeamId);

router.route("/addmember").post(teamController.addMember);

router.route("/:id/updatenp").put(teamController.updatetnp);

router.put("/:id/update", upload.single("teamImage"), (req, res) => {
    Team.findById(req.params.id)
      .then((team) => {
        team.teamName = req.body.teamName || team.teamName;
        team.sport = req.body.sport || team.sport;
        team.teamImage = req.file.originalname || team.teamImage;
  
        team
          .save()
          .then(() => res.json("Team updated"))
          .catch((err) => res.status(400).json(`Error:${err}`));
      })
      .catch((err) => res.status(400).json(`Error:${err}`));
  });

router.route("/deletemember/:playerId").delete(teamController.deleteMember);

router.route("/delete/:teamId").delete(teamController.deleteTeam);

module.exports = router;