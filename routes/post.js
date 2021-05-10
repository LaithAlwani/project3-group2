const express = require("express");
const router = express.Router();
const db = require("../models");


const postController = require("../controllers/postController")

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

const upload = multer({storage:storage});

//Add new post with image
router.post("/addpost/:id", upload.single("postFile"), (req, res) => {
const _id = req.params.id;
const  { title, post, postAuthor} = req.body;
db.Post.create({
    title,
		post,
		postAuthor, 
    postFile: req.file.originalname
  }, (err, post) => {
    if(err){
      console.log(err);
      return 
    }
    db.Team.findById(_id, (err, team )=>{
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
router.route("/addnew/:id").post(postController.addPostNoImage)


router.route("/getpost/:id" ).get(postController.getPost);

// Get Post by TeamId
router.route("/getposts/team/:id").get(postController.getTeamPosts);

//delete a post from team and post schema
router.route("/:teamid/:postid").delete(postController.deletPost);

module.exports = router;