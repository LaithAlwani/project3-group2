const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.User.find(req.query)
			.then(usersRes => res.json(usersRes))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.User.findById(req.params.id)
			.then(usersRes => res.json(usersRes))
			.catch(err => res.status(422).json(err));
	}
};
