import axios from "axios";

export default {
	getAllUsers: function () {
		return axios.get("/api/users");
	},
	getSingleUser: function (id) {
		console.log("API requesting single user data for user :" + id);
		return axios.get("/api/users/" + id);
	}
};
