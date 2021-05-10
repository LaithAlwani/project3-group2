const express = require("express");
const router = express.Router();
const multer = require("multer");

const User = require("../models/user");
const userController = require("../controllers/userController");

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
router.route("/users").get(userController.getAllUsers);

router.route("/:id/teams").get(userController.getUsersTeams);

router.route("/:id/update").put(userController.updateUser);

router.put("/:id/updatepic", upload.single("image"), (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.image = req.file.originalname || user.image;

      user
        .save()
        .then(() => res.json("Session updated"))
        .catch((err) => res.status(400).json(`Error:${err}`));
    })
    .catch((err) => res.status(400).json(`Error:${err}`));
});

module.exports = router;
