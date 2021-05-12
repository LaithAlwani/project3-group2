import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../utils/UserContext";

const Landing = ({ getUser }) => {
  const history = useHistory();

  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    _id: "",
    email: "",
    teams: [],
    userCreated: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      setError("You are not authorized please login! redirecting to login");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }

    fetchPrivateDate();
  }, []);

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

  return error ? (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  ) : (
    <UserContext.Provider value={userData}>
      <div className="text-center">
        <h1 className="title mt-3">Welcome {userData.username} !!!</h1>
        <p className="text">Connect with your team today.</p>
        <Link to="/teams">
          <button className="btn">Teams</button>
        </Link>

        <div className="container-fluid mt-5">
          <h2>Coming Soon!</h2>
          <div className="row  mt-3">
            <div className="col-sm-4">
              <img
                src={`/uploads/google-calendar.jpg`}
                alt="Calendar"
                className="img-fluid main-pics"
              />
              <div className="mt-3">
                <h5>Google Calender</h5>
                <p>schedule team meetings and workouts</p>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src={`/uploads/polls.png`}
                alt="team"
                className="img-fluid main-pics"
              />
              <div className="mt-3">
                <h5>Poll</h5>
                <p>Engage players in decision making</p>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src={`/uploads/chatsrus.jpeg`}
                alt="post"
                className="img-fluid main-pics"
              />
              <div className="mt-3">
                <h5>Team Chat</h5>
                <p>Real team chat with your teammates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Landing;
