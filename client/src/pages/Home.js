import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 id="title"> My TEAM</h1>
        <p className="lead">Connect with your team today.</p>
        <Link to="/register">
          <button className="btn">Get Started</button>
        </Link>
      </div>

      <div className="container-fluid card-bottom">
        <div className="row text-center slideanim">
          <div className="col-lg-4 mb-3">
            <div className="thumbnail">
              <img
                src={`/uploads/football.png`}
                alt="track"
                className="main-pics"
              />
              <h4>Team Roster</h4>
              <p>Track team roster</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="thumbnail">
              <img
                src={`/uploads/sports.png`}
                alt="team"
                className="main-pics"
              />
              <h4>Team Workout</h4>
              <p>Build your team</p>
            </div>
          </div>
          <div className="col-lg-4 mb-2">
            <div className="thumbnail">
              <img
                src={`/uploads/message.png`}
                alt="post"
                className="main-pics"
              />
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
