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
{/* button */}
<div id="buttoncontainer">
 <Link to="/register" className="mr-4"><button className="button" type="button">
            Sign Up   </button> </Link>

<br></br>

  <Link to="/login" className="mr-4"><button className="button">Login </button> </Link>         
  </div>  

<div id="words">
  <h3 id="keywords"> Chat</h3>   <h3 id="keywords" dangerouslySetInnerHTML={{__html:'Build'}}></h3> 
  </div>

{/* footer */}

<footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      </div>
      <div className="col-md-3 col-sm-6">
      </div>
      <div className="col-md-3 col-sm-6">

      </div>
    	<div className="col-md-3">
    		<h4>Creators</h4>
            <ul className="social-network social-circle">
             <li><a href="https://github.com/nashwalters" className="icoFacebook" title="Github"><i className="fa fa-github"></i></a></li>
             <li><a href="https://github.com/ttmgs" className="icoLinkedin" title="Githb"><i className="fa fa-github"></i></a></li>
             <li><a href="https://github.com/LaithAlwani" className="icoLinkedin" title="Github"><i className="fa fa-github"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2021 - My Team.  All rights reserved.</p>
		</div>
	</div>
  </div>
  </div>
  </footer>
  </div>
  
  )
}


export default Home;




