const db = require("../models");

exports.getTeamPosts = (req,res) => {
    const id = req.params.id
    db.Team.findById(id).populate('posts').exec((err, posts)=>{
      if(err){
        console.log(err)
        res.send("No posts found").status(500).end();
      }
      console.log(posts);
      res.json(posts);
    })
  }

//Get post by id 
  exports.getPost = (req, res) => {
    db.Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error:${err}`))
}

exports.addPostNoImage = (req, res) => {

    const _id = req.params.id;
    const  { title, post, postAuthor} = req.body;
    db.Post.create({
        title,
        post,
        postAuthor
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
  }

  exports.deletPost = async (req, res) => {
    try {
      const team = await db.Team.findByIdAndUpdate(
        req.params.teamid,
        {
          $pull: { posts: req.params.postid },
        },
        { new: true }
      );
  
      if (!team) {
        return res.status(400).send("Team not found");
      }
  
      await db.Post.findByIdAndDelete(req.params.postid);
  
      res.send("Success");
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  }