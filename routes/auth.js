const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/forgotpassword").post(authController.forgotPassword);

router.route("/passwordreset/:resetToken").put(authController.resetPassword);

module.exports = router;
