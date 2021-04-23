import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
     return (
        <div>
            <h1>Project 3 Group 2</h1>
            <ul>
                <li><Link to="/register"> Sign Up </Link></li>
                <li><Link to="/login"> Login</Link></li>
            </ul>
        </div>
         

         


     )
};

export default Home;