import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/UserContext";
import "../App.css";


const Landing = ({ getUser }) => {
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
        getUser(data);
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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text">Welcome {userData.username} !!!</h1>
            <p className="text">Connect with your team today.</p>
            <Link to="/teams"><button className="btn btn-primary btn-main">Teams</button></Link>
            <Link to="/profile"><button className="btn btn-primary btn-main">Profile</button></Link>
          </div>
        </div>
        <div className="container-fluid text-center card-bottom">
          <div className="row text-center slideanim">
            <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={`/uploads/sports.png`} alt="track" className="main-pics"/>
                    <p><strong>Track Team</strong></p>
                    <p>Track team activity</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={`/uploads/football.png`} alt="team" className="main-pics"/>
                    <p><strong>Team Work</strong></p>
                    <p>Build your team</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={`/uploads/message.png`} alt="post"className="main-pics"/>
                    <p><strong>Team Posts</strong></p>
                    <p>Post messages, schedule and other team information</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Landing;
