const mongoose = require("mongoose");

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
	postImage:{
		type:String,
		required: true,
	},
	postCreated: {
		type: Date,
		default: Date.now
	},

});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;