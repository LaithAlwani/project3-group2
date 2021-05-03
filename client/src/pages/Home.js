import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/orange.png"
const Home = () => {
  


  return (
      <div>

        <div id="orange">
{/* 
        <div className="home"> */}
          <Link to="/register" className="mr-4">
            Sign Up
          </Link>

          <br></br>

         <Link to="/login" className="mr-4"> Login </Link>
        {/* </div> */}
        </div> 
  
   
{/* footer */}
       

<div class="footer-dark">
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-3 item">
                
            </div>
            <div class="col-sm-6 col-md-3 item">
                
            </div>
            <div class="col-md-6 item text">
              
            </div>
            <i class="fa fa-github" aria-hidden="true"></i>

        </div>
        <p class="copyright">My Team © 2021</p>
    </div>
</footer>
</div>











        </div>
   
  )
};

export default Home;














{/* <div class="social"><a href="#"><i class="icon ion-social-github"></i></a><a href="#"><i class="icon ion-social-github"></i></a><a href="#"><i class="icon ion-social-github"></i></a></div> */}