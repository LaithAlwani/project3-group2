import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddPost from "./AddPost";
import "../../styles/Post.css";

//Display all post in the made in the team
const Post = ({isAdmin}) => {
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const [post, setPost] = useState([]);
  const [newPostModel, setNewPostModel] = useState(false);

  const updateNewPostModel = value => {
    setNewPostModel(value);
  };

  useEffect(() => {
    getAllPosts();
  }, [newPostModel]);

  const getAllPosts = () => {
    axios
      .get(`/api/posts/getposts/team/${id}`)
      .then((res) => setPost(res.data.posts))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <button className="btn modal-btn" onClick={() => setNewPostModel(true)}>
          Add Post
        </button>
      </div>
      <div className="clearfix">
        {newPostModel && (
          <AddPost
            newPostModel={newPostModel}
            updateNewPostModel={updateNewPostModel}
          />
        )}
        {post.length === 0 ? (
          <h5 className="text">No Posts Available</h5>
        ) : (
          post
            .map((posts) => (
              <div key={posts._id}>
                <Link to={{pathname:`/view/${id}/${posts._id}`, state:{isAdmin}}}>
                  <div className="card w-80 card-post ">
                    <div className="card-body card-main ">
                      <h3>{posts.title}</h3>
                      <span className="card-text">
                        posted by: {posts.postAuthor}
                      </span>
                      <p>
                        <span className="card-text">
                          post date: {posts.timestamp}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
            .reverse()
        )}
      </div>
    </div>
  );
};

export default Post ;
