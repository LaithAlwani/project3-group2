import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/UserContext";
import TeamsContainer from "../components/team/TeamsContainer";
import "../App.css";

const Teams = () => {
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
      <div>
        <TeamsContainer />
      </div>
    </UserContext.Provider>
  );
};

export default Teams;
