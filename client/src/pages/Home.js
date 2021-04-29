import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1>My Team</h1>

<div id="wallpaper">
      <Link to="/register" className="mr-4">
        Sign Up
      </Link>
      <Link to="/login"> Login</Link>
    </div>
    </div>
  );
};

export default Home;
