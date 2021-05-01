import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/UserContext";
import { Profile } from "../components/Profile";
import "../App.css";

const Landing = ({ getUsername }) => {
  const history = useHistory();

  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    _id: "",
    email: "",
    teams: "",
    userCreated: "",
  });

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
        setUserData(data);
        getUsername(data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login! Redirecting to login");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
  
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  ) : (
    <UserContext.Provider value={userData}>
      <div className="container">
        <h1 className="text-center mt-3">Welcome {userData.username} !!</h1>
        <div className="row text-center">
          <div className="col-sm-3">
            <Profile />
          </div>
          <div className="col-sm-9">
            {/* <MyTeams/> */}
            Hello from my teams
          </div>
          
        </div>
        
        
      </div>
    </UserContext.Provider>
  );
};

export default Landing;
