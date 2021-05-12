import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Forms.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/login");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/portal");
    } catch (error) {
      setError(`Invalid credentials. Please try again`);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="log-reg">
      <form onSubmit={loginHandler} className="log-reg-form">
        <h3 className="log-reg-title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <label htmlFor="email">Email:</label>
        <div className="input-group">
          <span className="input-group-addon">
            <span className="fas fa-envelope icon"></span>
          </span>
          <input
            type="email"
            className="form-control"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>

        <label htmlFor="password">
          Password:{" "}
        </label>
        <div className="input-group">
          <span className="input-group-addon">
            <span className="fas fa-lock icon"></span>
          </span>
          <input
            type="password"
            className="form-control"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
          <Link  to="/forgotpassword" className="small">
            <p className="links">Forgot Password?</p>
          </Link>
        <button type="submit" className="btn btn-block">
          Login
        </button>

        <span className="small">
          Don't have an account? <Link to="/register"><span className="links">Register</span></Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
