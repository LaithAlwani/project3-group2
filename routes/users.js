const router = require("express").Router();

const userController = require("../controllers/users");

router
	.route("/") //
	.get(userController.findAll);

router
	.route("/:id") //
	.get(userController.findById);

module.exports = router;
