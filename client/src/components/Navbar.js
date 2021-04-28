import React from "react";
import {Link, useLocation, useHistory} from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const history = useHistory();

    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        history.push("/login")
    }

    
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link exact className="navbar-brand" to="/portal">
        My Team
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* when user is loogged in  */}
          <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link className={location.pathname === "/portal" ? "nav-link active" : "nav-link"} to="/portal">
              Teams <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={logoutHandler}>
              Logout 
            </Link>
          </li>
        </ul>
        {/* when user is not logged in */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link className={location.pathname === "/login" ? "nav-link active" : "nav-link"} to="/login">
              Login <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === "/register" ? "nav-link active" : "nav-link"} to="/register" >
              Register 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
