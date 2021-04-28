import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"


const Home = () => {
     return (
        <div>


           <h1 id="title">Management Systems App</h1>
    
         {/* <ul>
                <li><Link to="/register"> Sign Up </Link></li>
                <li><Link to="/login"> Login</Link></li>
            </ul> */}




<div id="card">
            <ul>
               <div id="signup"> <Link to="/register"> Sign Up </Link></div>
                <br></br>
              <div id="login">  <Link to="/login"> Login</Link></div>
            </ul>
  
</div>


         </div>



     )
};

export default Home;

