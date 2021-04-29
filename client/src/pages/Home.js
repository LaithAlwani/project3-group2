import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
<<<<<<< HEAD

<div id="titlebox">
      <h1 id="title">My Team</h1>
      </div>


      
<div className="container">
      <Link to="/register" className="mr-4">
        Sign Up
      </Link>
      <br></br>
      <Link to="/login"> Login</Link>
=======
      <div class="float">
        {/* <h1 id="title">Management Systems</h1> */}

        <div id="card">
          <ul>
            <div id="login">
              <Link to="/login"> Login</Link>
            </div>
            OR
            <br />
            <div id="signup">
              <Link to="/register"> Create a free account </Link>
            </div>
          </ul>
        </div>
      </div>
>>>>>>> main
    </div>
    </div>
  );
};

export default Home;
