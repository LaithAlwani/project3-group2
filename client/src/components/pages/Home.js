import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"


const Home = () => {
     return (
        <div>
          
          <div class="float">
             {/* <h1 id="title">Management Systems</h1> */}
    



        <div id="card">
            <ul>
            <div id="login">  <Link to="/login"> Login</Link></div>
            OR
                <br></br>
             <div id="signup"> <Link to="/register"> Create a free account </Link></div>
            </ul>
  
        </div>
        </div>
    

</div>



     )
};

export default Home;

