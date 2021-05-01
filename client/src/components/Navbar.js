import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({username}) {
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/portal">
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
        {localStorage.getItem("authToken") && (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="#" className = "nav-link">
                Hi {username}!
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={
                  location.pathname === "/portal"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/portal"
              >
                Teams <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        {!localStorage.getItem("authToken") && (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link
                className={
                  location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/login"
              >
                Login <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/register"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
