import React , {useContext, useState} from "react";
import UserContext from "../utils/UserContext";
import { Modal, Button} from "react-bootstrap";
import axios from  "axios";
import "../styles/Profile.css";

const Profile = () => {
  const {username, email} = useContext(UserContext);

  return ( 
    <div className="container">
      <div className="row profile">
		    <div className="col-md-3">
			    <div className="profile-sidebar">
			      <div className="profile-userpic">
					    <img src={"https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"} alt={username}/>
				    </div>
		        <div className="profile-usermenu">
					    <ul className="nav">
						    <li className="active"> Name: {username}</li>
                <li className="active"> Email: {email}</li>
						  </ul>
				    </div>
			    </div>
			  </div>
		  </div>
    </div>
  );
}
 

const UpdateProfile = () => {

  const {_id} = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true) ;  

  const submitHandler = async () => {
    
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.put(
        `/api/auth/update/${_id}`,
        {
          username,
          email,
          password,
        },
        config
      );
      console.log(data);
      

      window.location.reload();
    } catch (error) {
      console.log(error)
      handleClose();
    }
  };
  return (
    <div> 
      <div className="container">
        <div className="row">
		      <div className="col-md-3">
            <ul>
              <li><button className="btn btn-primary" onClick={handleShow}>Update User Information</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}></div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={submitHandler} >
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
}
 
export {
  Profile, 
  UpdateProfile,
}