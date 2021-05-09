const express = require("express");
const router = express.Router();
const User = require("../models/User");
const multer = require("multer");

const {
  login,
  register,
  forgotPassword,
  resetPassword,
  update,
  createTeam,
  getTeamsByUserId,
  getPlayersByTeamId,
  getAllUsers,
  addMember,
  deleteMember,
  deleteTeam
} = require("../controllers/auth");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, "./client/public/uploads/");
  },
  filename: function(req, file, cb) {   
      cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/update/:id").put(update);

router.put("/updatepic/:id", upload.single("image"), (req, res) => {
User.findById(req.params.id)
.then( user => {
  user.image = req.file.originalname || user.image

  user.save().then(() => res.json("Session updated")).catch(err => res.status(400).json(`Error:${err}`))
})
.catch(err => res.status(400).json(`Error:${err}`))
});

router.route("/createteam").post(createTeam);

router.route("/teams/:id").get(getTeamsByUserId);

router.route("/teams/:id/players").get(getPlayersByTeamId);

router.route("/users").get(getAllUsers);

router.route("/teams/addmember").post(addMember);

router.route("/teams/delete/:teamId").delete(deleteTeam);

router.route("/teams/deletemember/:playerId").delete(deleteMember);

module.exports = router;
