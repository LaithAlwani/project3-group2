import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = ({ history }) => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");

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
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
    <span ClassName="error-message">{error}</span>
  ) : (
    <div>
      <div>
        <h1>Welcome {userData.username} !!</h1>
        <h3>{userData.username} Information:</h3>
        <ul>
            <li>Email: {userData.email}</li>
            <li>Id: {userData._id}</li>
            <li>My Teams:{userData.teams}</li>
            <li>Joined: {userData.userCreated}</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
