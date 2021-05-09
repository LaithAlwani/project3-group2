const mongoose = require("mongoose");
const moment = require('moment');

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
    required: true,
	},
	post: {
		type: String,
    required: true,
	},
  postAuthor: {
		type: String,
    required: true,
	},
	postFile:{
		type:String,
		required: false,
	},
	postCreated: {
		type: Date,
		default: Date.now
	},
	timestamp: {
		type: String,
		default: () => moment().format("D  MMM ,YYYY")
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;