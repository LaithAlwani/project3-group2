import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="text-center ">
      <h1 className="title"> My TEAM</h1>
      <p className="lead">Connect with your team today.</p>
      <Link to="/register">
        <button className="btn">Get Started</button>
      </Link>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={`/uploads/football.png`}
              alt="track"
              className="img-fuild main-pics"
            />
            <div className="mt-3">
              <h5>Team Roster</h5>
              <p>Track team roster</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={`/uploads/sports.png`}
              alt="team"
              className="img-fuild main-pics"
            />
            <div className="mt-3">
              <h4>Team Workout</h4>
              <p>Build your team</p>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={`/uploads/message.png`}
              alt="post"
              className="img-fuild main-pics"
            />
            <div className="mt-3">
              <h4>Team Posts</h4>
              <p>Post messages, schedule and other team information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
