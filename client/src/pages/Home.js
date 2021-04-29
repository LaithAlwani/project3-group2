import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1 id="title">My Team</h1>

<div className="container">
      <Link to="/register" className="mr-4">
        Sign Up
      </Link>
      <br></br>
      <Link to="/login"> Login</Link>
    </div>
    </div>
  );
};

export default Home;
