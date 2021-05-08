import React, {useState, useEffect} from "react";
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

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const submitHandler = async (e) => {
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
    formData.append("postImage",fileName);
  
    try {
      await axios.post( `/api/posts/addpost/${id}`, formData , config
      
      );
      setSuccess(`Post Added Successfully`)
      setTimeout(()=>{
        setSuccess("");
      },5000)
      window.location.reload();
  
    } catch (error) {
      setError(`Image Required/ File Unsupported`);
      if(error)
      setTimeout(()=>{
        setError("");
      },5000)
    }
  };

  return ( 
    <div>
      <div>
        <button className="btn btn-primary" onClick={handleShow}>
          Add Post
        </button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
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
                  value={post} rows="10" 
                  onChange ={e => setPost(e.target.value)}>
                </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="file">Choose Image File:</label>
                <input 
                  type="file" 
                  filename="postImage"  
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

  const [title, setTitle] = useState("");
  const [post,  setPost] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [file, setFile] = useState("");

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)
  
  useEffect(() => {
    axios.get(`/api/posts/getpost/${id}`)
    .then(res => [console.log(res),
     setTitle(res.data.title),
     setPostAuthor(res.data.postAuthor),
     setPost(res.data.post),
     setFile(res.data.postImage)
    ])  

   

  }, []);

  return ( 
    <div>
      <div class="jumbotron">
        <div>
          <h1 class="display-4">{title}</h1>
          <span>Written by: {postAuthor}</span>
          <p>{post}</p>
          <img src={ `/uploads/${file}`}></img>
        </div>
        <div>
        <a class="btn btn-primary btn-lg" href="javascript:history.back()" role="button">Back</a>
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
    axios.get(`/api/posts/getposts/team/${id}`)
    .then(res => setPost(res.data.posts))
    
  })

  return (
    <div>
      {post.map((posts, key) => (
        <div className="card  register-screen__form w-100 h-10" key={key}>
          <div className="card-body">
            <a href={`/update/${posts._id}`}> <h3>{posts.title}</h3> </a>
            <span className="card-text">Written by: {posts.postAuthor}</span>
          </div>
        </div> 
      )).reverse()}
    </div>
  );
}
 
 
export { AddPost , Post, ViewPost};