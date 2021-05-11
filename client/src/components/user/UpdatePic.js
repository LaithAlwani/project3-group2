import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "../../styles/Profile.css";

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

export default UpdatePic;