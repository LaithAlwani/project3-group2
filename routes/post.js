const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Team = require("../models/Team");

const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
  callback(null,"./client/public/uploads/" )
  },
  filename: (req, file, callback) =>{
    callback(null, file.originalname)
  },
  allowedFile:function(req, file, callback) {
    if (!file.originalname.match(/\.(pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|mp4|MP4)$/)) {
        req.fileValidationError = 'Only  files are allowed!';
        return cb(new Error('Only  files are allowed!'), false);
    }
    callback(null, true);
  }
})

const upload = multer({storage:storage})

//Add new post with image
router.post("/addpost/:id", upload.single("postFile"), (req, res) => {

const _id = req.params.id;
const  { title, post, postAuthor} = req.body;
	Post.create({
    title,
		post,
		postAuthor, 
    postFile: req.file.originalname
  }, (err, post) => {
    if(err){
      console.log(err);
      return 
    }
    Team.findById(_id, (err, team )=>{
      if(err){
        console.log(err);

      }else{
        team.posts.push(post._id);
        team.save();
      }
    });
    res.status(201).json({
      success:true,
      data:"Post Created"
    });
  });
})

//Add post without image
router.post("/addnew/:id", (req, res) => {

  const _id = req.params.id;
  const  { title, post, postAuthor} = req.body;
    Post.create({
      title,
      post,
      postAuthor
    }, (err, post) => {
      if(err){
        console.log(err);
        return 
      }
      Team.findById(_id, (err, team )=>{
        if(err){
          console.log(err);
  
        }else{
          team.posts.push(post._id);
          team.save();
        }
      });
      res.status(201).json({
        success:true,
        data:"Post Created"
    });
  });
})

//Get post by id 
router.get("/getpost/:id", (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error:${err}`))
});

// Get Post by TeamId
router.get("/getposts/team/:id", (req,res) => {
  const id = req.params.id
  Team.findById(id).populate('posts').exec((err, posts)=>{
    if(err){
      console.log(err)
      res.send("No posts found").status(500).end();
    }
    console.log(posts);
    res.json(posts);
  })
});

module.exports = router;