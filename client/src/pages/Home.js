import React from "react";
import Jumbotron from "../components/jumbotron/jumbotron";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const logo = require("../styles/team.png");



const Home = () => {
  return (
    <div>
      <div id="titlebox">
      <h1 id="title">My</h1>
      </div>


      <div className="bg_image"
        style={{
          backgroundImage: 'url('+logo+')',
          backgroundSize: "cover",
          height: "100vh",
          // color: "#f5f5f5"
        }}
        ></div>


<div class="container" style={{position: "fixed"}}>
    <div className="home"> 
      <Link to="/register" className="mr-4">
        Sign Up
      </Link>
      <br></br>
      <Link to="/login"> Login</Link>
    </div>
   </div>


   <div class="footer">


  <div class="footer-content-right">
  <a href="https://github.com/nashwalters"><img src="images/github.jpeg" class="icon-style" alt="Github icon"/></a>
  <a href="https://github.com/LaithAlwani"><img src="images/github.jpeg" class="icon-style" alt="Github icon"/></a>
  <a href="https://github.com/ttmgs"><img src="images/github.jpeg" class="icon-style" alt="Github icon"/></a>
</div>
</div>
   </div>
     );
};



export default Home;

