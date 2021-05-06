import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  


  return (
      <div>
       
{/* title container */}
        <div id="orange">
        <h1 id="title">MY TEAM</h1>
        </div> 

{/* button */}
 <div id="buttoncontainer">
 <Link to="/register" className="mr-4"><button class="button" type="button">
            Sign Up
            </button> </Link>

          <br></br>

         <Link to="/login" className="mr-4"><button type="button">Login </button> </Link>         
  </div>  

<div id="words">
  <h3 id="keywords"> Chat</h3>   <h3 id="keywords" dangerouslySetInnerHTML={{__html:'Build'}}></h3> 
  </div>

{/* footer */}
       
<footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
      </div>
      <div class="col-md-3 col-sm-6">
      </div>
      <div class="col-md-3 col-sm-6">

      </div>
    	<div class="col-md-3">
    		<h4>Creators</h4>
            <ul class="social-network social-circle">
             <li><a href="https://github.com/nashwalters" class="icoFacebook" title="Github"><i class="fa fa-github"></i></a></li>
             <li><a href="https://github.com/ttmgs" class="icoLinkedin" title="Githb"><i class="fa fa-github"></i></a></li>
             <li><a href="https://github.com/LaithAlwani" class="icoLinkedin" title="Github"><i class="fa fa-github"></i></a></li>
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






