import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Forms.css";


const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );
      console.log(data);
      // localStorage.setItem("authToken", data.token);

      history.push("/login");
    } catch (error) {
      setError(`Email already Exists`);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="log-reg">
      <form onSubmit={registerHandler} className="log-reg-form">
        <h3 className="log-reg-title">Sign Up</h3>
        {error && <span className="error-message">{error}</span>}

        <label htmlFor="name">Username:</label>
        <div className="input-group">
          <span class="input-group-addon">
            <span class="fas fa-user icon"></span>
          </span>
          <input
            type="text"
            className="form-control"
            required
            id="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <label>Email:</label>
        <div className="input-group">
          <span class="input-group-addon">
            <span class="fas fa-envelope icon"></span>
          </span>
          <input
            type="email"
            className="form-control"
            required
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div className="input-group">
          <span class="input-group-addon">
            <span class="fas fa-lock icon"></span>
          </span>
          <input
            type="password"
            className="form-control"
            required
            id="password"
            autoComplete="true"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <div className="input-group">
          <span class="input-group-addon">
            <span class="fas fa-lock icon"></span>
          </span>
          <input
            type="password"
            className="form-control"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          {" "}
          Sign Up
        </button>
        <span className="small">
          Already have an account? <Link to="/login"><span className="links">Login</span></Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
