import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import sports from "../images/sports.png";
import everyone from "../images/everyone.png";
import multi from "../images/multi.png";
import build from "../images/build.png";
import together from "../images/together.png";

const Home = () => {
  return (
    <div>
      {/* title container */}

      <div id="orange">
        <div id="titlebox">
          <h1 id="title">TEAM</h1>
        </div>
      </div>

      {/* button */}
      <div id="buttoncontainer">
        <Link to="/register" className="mr-4">
          <button className="button" type="button">
            Sign Up
          </button>
        </Link>

        <br></br>

        <Link to="/login" className="mr-4">
          <button className="button">Login </button>{" "}
        </Link>
      </div>

{/* <div id="words">

</div> */}






      {/* footer */}

      <div class="footer">
        <h1>Chat</h1> <br></br><h1>Build</h1>
      </div>


    </div>
  );
};

export default Home;
