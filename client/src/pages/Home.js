import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const logo = require("../styles/team.png");


const Home = () => {
  return (
    <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+logo+')',
          backgroundSize: "cover",
          height: "100vh",
          // color: "#f5f5f5"
        }}
      >

<div id="titlebox">
      <h1 id="title">My</h1>
      </div>

    
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

