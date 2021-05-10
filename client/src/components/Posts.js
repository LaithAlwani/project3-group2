import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import AddPost from "./AddPost"

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
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">{title}</h1>
          <span>Written by: {postAuthor}</span>
          <p>{post}</p>
        <div>
          {file && file.endsWith("mp4")? 
          <video controls loop muted width="75%">
          <source src={ `/uploads/${file}`} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video> : <img src={ `/uploads/${file}`} alt="" /> }
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => history.go(-1)}>Back</button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={deletePost}>Delete Post</button>
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
        <button className="btn" onClick={()=>setNewPostModel(true)}>
          Add Post
        </button>
      </div>
      {newPostModel && <AddPost  newPostModel={newPostModel} updateNewPostModel={updateNewPostModel} />}
    {post.map((posts, key) => (
      <div className="card  register-screen__form w-100" key={key}>
        <div className="card-body">
          <Link to={`/view/${id}/${posts._id}`}> <h3>{posts.title}</h3> </Link>
          <span className="card-text">posted by: {posts.postAuthor}</span>
          <p><span className="card-text">post date: {posts.timestamp}</span></p>
        </div>
      </div> 
    )).reverse()}
  </div>
  );
}
 
export { Post, ViewPost};