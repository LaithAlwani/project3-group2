import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/UserContext";
import { Profile, UpdateProfile } from "../components/Profile";
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
      setTimeout(()=>{
        history.push("/login");
      },2000);
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
        setTimeout(()=>{
          history.push("/login");
        },2000);
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
    // <div ClassName="alert alert-danger">{error}</div>
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  ) : (
    <UserContext.Provider value={userData}>
      <div>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            Welcome {userData.username} !!
          </h1>
        </div>
        <Profile />
        <UpdateProfile />
      </div>
    </UserContext.Provider>
  );
};

export default Landing;
