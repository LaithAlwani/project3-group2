import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/orange.png"
const Home = () => {
  


  return (
      <div>
       

        <div id="orange">
        <h1 id="title">MY TEAM</h1>
{/* 
        <div className="home"> */}
          <Link to="/register" className="mr-4">
            Sign Up
          </Link>

          <br></br>

         <Link to="/login" className="mr-4"> Login </Link>
        {/* </div> */}
        </div> 
  <h3>CHAT   BUILD     CREATE </h3>
   
{/* footer */}
       
<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        {/* <div class="footer-pad">
          <h4>Heading 1</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div> */}
      </div>
      <div class="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        {/* <div class="footer-pad">
          <h4>Heading 2</h4>
          <ul class="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div> */}
      </div>
      <div class="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div class="footer-pad">
          <h4>Heading 3</h4>
          <ul class="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>About the Developers</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Github"><i class="fa fa-github"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Githb"><i class="fa fa-github"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Github"><i class="fa fa-github"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2021 - My Team.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
  











        </div>
   
  )
};

export default Home;














{/* <div class="social"><a href="#"><i class="icon ion-social-github"></i></a><a href="#"><i class="icon ion-social-github"></i></a><a href="#"><i class="icon ion-social-github"></i></a></div> */}