import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../utils/UserContext";
import UpdatePic from "./UpdatePic";
import "../../styles/Profile.css";

const Profile = ({ updateProfile }) => {
  const { username, email, image } = useContext(UserContext);
  const [showModal, setShowModel] = useState(false);

  const updateModel = (value) => {
    setShowModel(value);
    
  };

  useEffect(() => {
    
  }, [updateProfile, showModal]);

  return (
    <>
      <div className="card h-100 card-profile">
        <div className="card-body">
          <div>
            <img
              className="profile-userpic"
              src={`/uploads/${image}`}
              alt={username}
            />
          </div>
          <h4 className="user-details">{username}</h4>
          <h6 className="user-details">{email}</h6>

          <button
            className="btn btn-block mt-2"
            onClick={() => setShowModel(true)}
          >
            Update Image
          </button>
          
            <UpdatePic showModal={showModal} updateModel={updateModel} />
          
        </div>
      </div>
    </>
  );
};

export default Profile;
