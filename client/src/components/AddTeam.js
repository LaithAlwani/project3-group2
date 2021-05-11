import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";
import {useHistory} from "react-router-dom";
import { Modal } from "react-bootstrap";

function AddTeam({ getShowTeams }) {
  const { _id } = useContext(UserContext);
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "/api/teams/createteam",
        {
          _id,
          teamName,
          sport,
        },
        config
      );
      getShowTeams(true);
      
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    
  };
  return (
    <>
      {error && <span className="error-message">{error}</span>}
      <div className="text-center mt-4">
        <h3>Please Enter The Team Information</h3>
        <form onSubmit={handleSubmit} className="add-team-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="team-name"
              placeholder="Team Name"
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="sport"
              placeholder="Sport"
              onChange={(e) => setSport(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-block" type="submit">
            Create Team
          </button>
        </form>
      </div>
    </>
  );
}

const UpdateTeam = () => {

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)

  const history = useHistory();

  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler =  (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const formData = new FormData(); 
    formData.append("sport",sport);
    formData.append("teamName",teamName);
    formData.append("teamImage",fileName);

    if (!fileName) {
      axios.put( `/api/teams/${id}/updatenp`, {teamName, sport} , config)
      .then( () => {
        setSuccess(`Team Updated Successfully`)
        setTimeout(()=>{
        setSuccess("");
        },3000)
        history.push("/portal")
      })
      .catch (error =>  { setError(error);
        if(error)
        setTimeout(()=>{
        setError("");
      },3000)
    }) 
    } else {
        axios.put( `/api/teams/${id}/update`, formData , config)
        .then( () => {
          setSuccess(`Post Added Successfully`)
          setTimeout(()=>{
          setSuccess("");
          },3000)
          history.push("/portal")
        })
        .catch (error =>  { setError(`Image Required/ File Unsupported`);
          if(error)
          setTimeout(()=>{
          setError("");
      },3000)
    })
  }
}

  return (
  <div>
    <div>
      <button className="btn btn-block" onClick={handleShow}>
        Update Team
      </button>
    </div>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}  encType="multipart/form-data">
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
            <div className="form-group">
              <label htmlFor="name">Team Name:</label>
                <input
                  type="text"
                  required
                  id="teamName"
                  placeholder="Enter Team Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Sport:</label>
                <input
                  type="text"
                  required
                  id="sport"
                  placeholder="Enter Sport"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="file">Choose Image File:</label>
                <input type="file" filename="teamImage"  className ="form-control-file" onChange={(e)=>{setFileName(e.target.files[0])
              }}/>
            </div>
            <button type="submit" className="btn btn-block">Update</button>
        </form>
        </Modal.Body>
      </Modal>
  </div>
  );
};

const DeleteTeam = () => {

  const url = window.location.pathname
  const id = url.substring(url.lastIndexOf('/')+ 1)
  const history = useHistory();

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTeam = (e) => {
      e.preventDefault();
      axios.delete(`/api/teams/delete/${id}`)
      .then(() => {history.push("/teams")
      })
      .catch(err =>console.log(err))
      
    };

  return (
  <div>
    <div>
      <button className="btn btn-block mt-2" onClick={handleShow}>
        Delete Team
      </button>
    </div>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this team?</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" className="btn" onClick={handleClose}> Close</button>
          <button variant="primary" className="btn" onClick={deleteTeam}>Delete Team</button>
        </Modal.Footer>
      </Modal>
  </div>
  );
};

export { AddTeam, UpdateTeam, DeleteTeam } ;
