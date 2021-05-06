import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const { username, email, image } = useContext(UserContext);

  return (
    <>
      <div className="profile-userpic">
        <img className="img"
          src={ `/uploads/${image}`}
          alt={username}
        />
      <UpdatePic />
      </div>
      <div className="text-left mt-3">
        <p> Name: {username}</p>
        <p> Email: {email}</p>
      </div>
      <UpdateProfile />
    </>
  );
};

const UpdateProfile = ({history}) => {
  
  const { _id } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      setError("You are not authorized please login! redirecting to login");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login! Redirecting to login");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, []);


  const submitHandler = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put( `/api/auth/update/${_id}`,{username, email, password,},config
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError("Email Already Exists in Database");
      if(!error)
      handleShow();
      setTimeout(()=>{
        setError("");
      },2000)
    }
  };


  return (
    <div>
      <button className="btn btn-primary" onClick={handleShow}>
        Update Profile
      </button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                required
                minlength="6" 
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {" "}
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const UpdatePic = ({history}) => {

  const [id, setId]= useState("")
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      setError("You are not authorized please login! redirecting to login");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setId(data._id)
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login! Redirecting to login");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, []);


  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };


    const formData = new FormData(); 
    formData.append("image",fileName);

    try {
      const { data } = await axios.put(
        `/api/auth/updatepic/${id}`, formData,
        config
      );
      console.log(data);
      

      window.location.reload();
    } catch (error) {
      setError(`File not supported`);
      console.log(error)
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  return (
  <div>
    <div>
      <button className="btn btn-primary" onClick={handleShow}>
        Update Image
      </button>
    </div>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}  encType="multipart/form-data">
            {error && <span className="error-message">{error}</span>}
            <div className="form-group">
                <label htmlFor="file">Choose Image File:</label>
                <input type="file" filename="image"  className ="form-control-file" onChange={(e)=>{setFileName(e.target.files[0])
              }}/>
            </div>
            <button type="submit" className="btn btn-block"> {" "} Update </button>
        </form>
        </Modal.Body>
      </Modal>
  </div>
  );
};

export { Profile, UpdateProfile, UpdatePic };
