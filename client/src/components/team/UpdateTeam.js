import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";

const UpdateTeam = () => {
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const history = useHistory();

  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const formData = new FormData();
    formData.append("sport", sport);
    formData.append("teamName", teamName);
    formData.append("teamImage", fileName);

    if (!fileName) {
      axios
        .put(`/api/teams/${id}/updatenp`, { teamName, sport }, config)
        .then(() => {
          setSuccess(`Team Updated Successfully`);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          history.push("/portal");
        })
        .catch((error) => {
          setError(error);
          if (error)
            setTimeout(() => {
              setError("");
            }, 3000);
        });
    } else {
      axios
        .put(`/api/teams/${id}/update`, formData, config)
        .then(() => {
          setSuccess(`Post Added Successfully`);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          history.push("/portal");
        })
        .catch((error) => {
          setError(`Image Required/ File Unsupported`);
          if (error)
            setTimeout(() => {
              setError("");
            }, 3000);
        });
    }
  };

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
          <form onSubmit={submitHandler} encType="multipart/form-data">
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}

            <label htmlFor="name">Team Name:</label>
            <div className="input-group">
              <span class="input-group-addon">
                <span class="fas fa-users icon"></span>
              </span>
              <input
                type="text"
                className="form-control"
                required
                id="teamName"
                placeholder="Enter Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>

            <label htmlFor="name">Sport:</label>
            <div className="input-group">
              <span class="input-group-addon">
                <span class="fas fa-basketball-ball icon"></span>
              </span>
              <input
                type="text"
                className="form-control"
                required
                id="sport"
                placeholder="Enter Sport"
                value={sport}
                onChange={(e) => setSport(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Choose Image File:</label>
              <input
                type="file"
                filename="teamImage"
                className="form-control-file"
                onChange={(e) => {
                  setFileName(e.target.files[0]);
                }}
              />
            </div>
            <button type="submit" className="btn btn-block">
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateTeam;
