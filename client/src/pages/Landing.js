import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";
import {Profile, UpdateProfile} from "../components/Profile";

const Landing = ({ history }) => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    _id: "",
    email: "",
    teams:"", 
    userCreated:""
  })

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
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
        setUserData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        history.push("/login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
    <span ClassName="error-message">{error}</span>
  ) : (
    <UserContext.Provider value={userData}>
    <div>
      <div>
        <h1 style={{textAlign:"center", marginTop:"20px"}}>Welcome {userData.username} !!</h1>
      </div>
      <Profile/>
      <UpdateProfile/>
    </div>
    </UserContext.Provider>
  );
};

export default Landing;

