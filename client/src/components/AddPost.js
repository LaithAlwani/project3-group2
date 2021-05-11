import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

//Add Post
const AddPost = ({newPostModel,updateNewPostModel}) => {

    const url = window.location.pathname
    const id = url.substring(url.lastIndexOf('/')+ 1)
   
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [postAuthor, setPostAuthor] = useState("");
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");
  
    
    const submitHandler =  (e) => {
      e.preventDefault();
    
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
    
      const formData = new FormData(); 
      formData.append("title",title);
      formData.append("postAuthor",postAuthor);
      formData.append("post",post);
      formData.append("postFile",fileName);
    
      if (!fileName) {
        axios.post( `/api/posts/addnew/${id}`, {title, postAuthor, post} , config)
        .then( () => {
          setSuccess(`Post Added Successfully`)
          setTimeout(()=>{
          setSuccess("");
          },2000)
          updateNewPostModel(false);
        })
        .catch (error =>  { setError(error);
          if(error)
          setTimeout(()=>{
          setError("");
        },2000)
      }) 
      } else {
          axios.post( `/api/posts/addpost/${id}`, formData , config)
          .then( () => {
            setSuccess(`Post Added Successfully`)
            setTimeout(()=>{
            setSuccess("");
            },2000)
            updateNewPostModel(false);
          })
          .catch (error =>  { setError(`Image Required/ File Unsupported`);
            if(error)
            setTimeout(()=>{
            setError("");
        },2000)
      })
    }
  }
  
  return ( 
    <div>
      <Modal size="lg"
        show={newPostModel}
        onHide={() => updateNewPostModel(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler} encType="multipart/form-data" >
            {error && <span className="error-message">{error}</span>}
            <div className="form-group">
              <label htmlFor="title">Title</label>
                <input
                  type="text" 
                  value={title} 
                  placeholder="Enter Title" 
                  onChange ={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label>Author</label>
                <input
                  type="text"
                  required
                  id="postAuthor"
                  placeholder="Author"
                  value={postAuthor}
                  onChange={(e) => setPostAuthor(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="password">Post:</label>
                <textarea 
                  className="form-control"
                  required 
                  placeholder="Enter post here..."
                  value={post} rows="10" 
                  onChange ={e => setPost(e.target.value)}>
                </textarea>
            </div>
           <div className="form-group">
              <label htmlFor="file">Choose Image File: (optional)</label>
                <input 
                  type="file" 
                  filename="postFile"  
                  className ="form-control-file" 
                  onChange={(e)=>{setFileName(e.target.files[0])
                }}/>
            </div>
              <button type="submit" className="btn btn-block"> {" "} Add Post </button>
          </form>
        </Modal.Body>
      </Modal>
    </div> 
    );
  }

  export default AddPost;