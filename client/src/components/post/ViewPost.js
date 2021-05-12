import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "../../styles/Post.css";

const ViewPost = () => {
    const history = useHistory();
    const location = useLocation();
    const isAdmin = location.state.isAdmin;
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [postAuthor, setPostAuthor] = useState("");
    const [file, setFile] = useState("");
  
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf("/") + 1);
    const delid = url.split("/").slice(-2).join("/");
  
    const deletePost = () => {
      axios.delete(`/api/posts/${delid}`).then((res) => console.log(res.data));
      history.go(-1);
    };
  
    const viewPost = () => {
      axios
        .get(`/api/posts/getpost/${id}`)
        .then((res) => [
          setTitle(res.data.title),
          setPostAuthor(res.data.postAuthor),
          setPost(res.data.post),
          setFile(res.data.postFile),
        ]);
    };
  
    useEffect(() => {
      viewPost();
    }, []);
  
    return (
      <div className="container">
        <div className="card card-post">
          <div className="card-body">
            <h1>{title}</h1>
            <span className="text">Written by: {postAuthor}</span>
            <br></br>
            <p className="align">{post}</p>
            <div className="postfile">
              {file && file.endsWith("mp4") ? (
                <video controls loop muted width="75%" className="postvid">
                  <source src={`/uploads/${file}`} type="video/mp4" />
                  Your browser does not support the video tag. I suggest you
                  upgrade your browser.
                </video>
              ) : (
                <img src={`/uploads/${file}`} alt="" />
              )}
            </div>
            <div className="post-btn">
              <button
                className="btn btn-primary btn-animate"
                onClick={() => history.go(-1)}
              >
                {" "}
                Back
              </button>
               {isAdmin &&(
                <button
                  className="btn btn-primary btn-animate"
                  onClick={deletePost}
                >
                  Delete Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewPost;