import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import AddPost from "./AddPost";
import "../styles/Post.css";

const ViewPost = () => {

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [post,  setPost] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [file, setFile] = useState("");

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)
  const delid = url.split("/").slice(-2).join("/")

  const deletePost = () => {
    axios.delete(`/api/posts/${delid}`)
    .then(res => console.log(res.data))
    history.go(-1)
  }

  const viewPost = () => { 
    axios.get(`/api/posts/getpost/${id}`)
    .then(res => [console.log(res),
      setTitle(res.data.title),
      setPostAuthor(res.data.postAuthor),
      setPost(res.data.post),
      setFile(res.data.postFile)
    ]) }

  useEffect(() => {
    viewPost();
  }, []);

  return ( 
    <div className="container">
      <div className="card card-post">
        <div className="card-body">
          <h1 className="display-4 text">{title}</h1>
          <span className="text">Written by: {postAuthor}</span>
          <br></br>
          <p className="align">{post}</p>
        <div className="postfile">
          {file && file.endsWith("mp4")? 
          <video controls loop muted width="75%" className="postvid">
          <source src={ `/uploads/${file}`} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video> : <img src={ `/uploads/${file}`} alt="" /> }
        </div>
        <div className="post-btn">
          <button className="btn btn-primary btn-animate" onClick={() => history.go(-1)}> Back</button>
          <button className="btn btn-primary btn-animate" onClick={deletePost}>Delete Post</button>
        </div>
        </div>
      </div>
    </div>
   );
}
 

//Display all post in the made in the team
const Post = () => {

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)

  const [post, setPost]= useState([])
  const [newPostModel, setNewPostModel] = useState(false)

  const updateNewPostModel = (value) => {
    setNewPostModel(value);
  }

  useEffect(() =>{
    getAllPosts();
    
  },[newPostModel])

  const getAllPosts = ()=>{
    axios.get(`/api/posts/getposts/team/${id}`)
    .then(res => setPost(res.data.posts))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div>
        <button className="btn modal-btn" onClick={()=>setNewPostModel(true)}>
          Add Post
        </button>
      </div>
      <div className="clearfix">
      {newPostModel && <AddPost  newPostModel={newPostModel} updateNewPostModel={updateNewPostModel} />}
      {post.length === 0 ? <h5 className="text">No Posts Available</h5> :
        post.map((posts, key) => (
        <Link to={`/view/${id}/${posts._id}`}><div className="card w-80 card-post " key={key}>
        <div className="card-body card-main ">
          <h3>{posts.title}</h3> 
          <span className="card-text">posted by: {posts.postAuthor}</span>
          <p><span className="card-text">post date: {posts.timestamp}</span></p>
        </div>
      </div></Link> 
    )).reverse()}
    </div>
  </div>
  );
}


export { Post, ViewPost}