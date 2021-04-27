import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>My Team</h1>

      <Link to="/register" className="mr-4">
        Sign Up
      </Link>
      <Link to="/login"> Login</Link>
    </div>
  );
};

export default Home;
