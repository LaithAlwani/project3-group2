const express = require("express");
const router = express.Router();


const { login, register, forgotPassword, resetPassword, update} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/update/:id").put(update);

module.exports = router;
