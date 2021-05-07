import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      {/* title container */}

      <div id="orange">
        <div id="titlebox">
          <h1 id="title">MY TEAM</h1>
        </div>
      </div>

      {/* button */}
      <div id="buttoncontainer">
        <Link to="/register" className="mr-4">
          <button className="button" type="button">
            Sign Up{" "}
          </button>{" "}
        </Link>

        <br></br>

        <Link to="/login" className="mr-4">
          <button className="button">Login </button>{" "}
        </Link>
      </div>

      {/* footer */}
      <div class="footer">
        <div class="footer">
          <p class="footer-text-left">
            <a href="index.html" class="menu">
              home
            </a>
            <a href="https://css.sammy-codes.com/about.html" class="menu">
              about
            </a>
            <a href="https://css.sammy-codes.com/credits.html" class="menu">
              credits
            </a>
          </p>
        </div>
        <div class="footer-content-right">
          <a href="https://github.com/digitalocean">
            <img
              src="images/github.jpeg"
              class="icon-style"
              alt="Github icon"
            />
          </a>
          <a href="https://www.twitter.com/DigitalOcean">
            <img
              src="images/twitter.jpeg"
              class="icon-style"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.twitter.com">
            <img src="images/email.jpeg" class="icon-style" alt="Emailicon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
