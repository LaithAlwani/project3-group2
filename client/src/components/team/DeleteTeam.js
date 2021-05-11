import React, { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Modal } from "react-bootstrap";

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

  export default DeleteTeam;