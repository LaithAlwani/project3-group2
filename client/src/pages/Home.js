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

        </div>
      </div>

      {/* button */}
      {/* <div id="buttoncontainer">
        <Link to="/register" className="mr-4">
          <button className="button" type="button">
            Sign Up
          </button>
        </Link>

        <br></br>

        <Link to="/login" className="mr-4">
          <button className="button">Login </button>{" "}
        </Link>
      </div> */}

{/* <div id="words">

</div> */}






      {/* footer */}

      <div className="footer">
        <h2>Chat</h2>
      </div>


    </div>
  );
};

export default Home;
