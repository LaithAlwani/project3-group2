import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const { username, email, image } = useContext(UserContext);

  return (
    <>
    <div className="card h-100 card-profile">
			<div className="card-body">
        <div>
          <img className="profile-userpic" src={ `/uploads/${image}`} alt={username} />
        </div>
          <h4 className="user-details">{username}</h4>
          <h6 className="user-details">{email}</h6>
        <div className="center-button">
        <UpdatePic/>
        </div>
      </div>
    </div>
    </>
  );
};

const UpdateProfile = ({history}) => {
  
  const { _id } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
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


  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put( `/api/users/${_id}/update`,{username, email, password,},config
      );
      setSuccess(`Profile Updated Successfully`)
      setTimeout(()=>{
        setSuccess("");
      },2000)
      window.location.reload();
    } catch (error) {
      setError(`Email Already Exists`);
      setPassword("");
      if(error)
      setTimeout(()=>{
        setError("");
      },2000)
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row gutters">
	        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 card-space">
            <Profile/>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 card-space">
            <div className="card h-100 card-profile">
			        <div className="card-body">
				        <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						        <h4 className="mb-3 text">Personal Details</h4>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <span className="success-message">{success}</span>}
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
                        minLength="6" 
                        id="password"
                        autoComplete="true"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary button-sub">
                      {" "}
                      Save Changes
                    </button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdatePic = () => {

  const { _id } = useContext(UserContext);

  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    formData.append("image",fileName);

    try {
      const { data } = await axios.put(
        `/api/users/${_id}/updatepic`, formData,
        config
      );
      console.log(data);
      window.location.reload();
      setSuccess(`Image Updated`);
      setTimeout(() => {
        setSuccess("");
      }, 5000);

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
      <button className="btn btn-block mt-2" onClick={handleShow}>
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
            {success && <span className="success-message">{success}</span>}
            <div className="form-group">
                <label htmlFor="file">Choose Image File:</label>
                <input type="file" filename="image"  className ="form-control-file" onChange={(e)=>{setFileName(e.target.files[0])
              }}/>
            </div>
            <button type="submit" className="btn btn-block">Update</button>
        </form>
        </Modal.Body>
      </Modal>
  </div>
  );
};

export { Profile, UpdateProfile, UpdatePic };