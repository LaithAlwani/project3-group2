import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      {/* title container */}

      <div id="orange">
        <div id="titlebox">
          <h1 id="title">TEAM</h1>
        </div>

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
        <h2>Chat</h2> <h2>Build</h2>
      </div> */}
      </div>



{/* footer */}

<div class="footer">
  <p>Footer</p>
</div>


      <div className="footer">
        <h2>Chat</h2>
      </div>


    </div>
  );
};

export default Home;
