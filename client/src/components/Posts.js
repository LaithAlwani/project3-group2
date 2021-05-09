import React, {useState, useEffect} from "react";
import {useHistory, Link} from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";



//Add Post
const AddPost = () => {

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)
 
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [success, setSuccess]= useState("");
  const [error, setError]= useState("");
  const [fileName, setFileName] = useState("");

  const [lgShow, setLgShow] = useState(false);
  
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
        },5000)
        window.location.reload();
      })
      .catch (error =>  { setError(error);
        if(error)
        setTimeout(()=>{
        setError("");
      },5000)
    }) 
    } else {
        axios.post( `/api/posts/addpost/${id}`, formData , config)
        .then( () => {
          setSuccess(`Post Added Successfully`)
          setTimeout(()=>{
          setSuccess("");
          },5000)
          window.location.reload();
        })
        .catch (error =>  { setError(`Image Required/ File Unsupported`);
          if(error)
          setTimeout(()=>{
          setError("");
      },5000)
    })
  }
}

return ( 
  <div>
    <div>
      <button className="btn btn-primary" onClick={() => setLgShow(true)}>
        Add Post
      </button>
    </div>
    <Modal size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submitHandler} encType="multipart/form-data" >
          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}
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


const ViewPost = () => {

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [post,  setPost] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [file, setFile] = useState("");

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)
  
  useEffect(() => {
    axios.get(`/api/posts/getpost/${id}`)
    .then(res => [console.log(res.data),
     setTitle(res.data.title),
     setPostAuthor(res.data.postAuthor),
     setPost(res.data.post),
     setFile(res.data.postFile)
    ])  
  }, []);

    
  return ( 
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">{title}</h1>
          <span>Written by: {postAuthor}</span>
          <p>{post}</p>
        <div>
          {file.endsWith("mp4")? 
          <video controls loop muted width="75%">
          <source src={ `/uploads/${file}`} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video> : <img src={ `/uploads/${file}`} alt="" /> }
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => history.go(-1)}>Back</button>
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

  useEffect(() =>{
    getAllPosts();
    
  },[])

  const getAllPosts = ()=>{
    axios.get(`/api/posts/getposts/team/${id}`)
    .then(res => setPost(res.data.posts))
    .catch(err => console.log(err))
  }

  return (
    <div>
    {post.map((posts, key) => (
      <div className="card  register-screen__form w-100" key={key}>
        <div className="card-body">
          <Link to={`/view/${posts._id}`}> <h3>{posts.title}</h3> </Link>
          <span className="card-text">posted by: {posts.postAuthor}</span>
          <p><span className="card-text">post date: {posts.timestamp}</span></p>
        </div>
      </div> 
    )).reverse()}
  </div>
  );
}
 
 
export { AddPost , Post, ViewPost};