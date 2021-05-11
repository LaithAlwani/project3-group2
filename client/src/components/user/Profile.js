import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import UpdatePic from "./UpdatePic"
import "../../styles/Profile.css";

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

export default Profile ;