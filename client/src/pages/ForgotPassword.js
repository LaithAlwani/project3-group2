import { useState } from "react";
import React from "react";
import axios from "axios";
import "../styles/ForgotPassword.css";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } catch (error) {
      setError(`Email address not found`);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgotpassword-screen">
      <form
        onSubmit={forgotPasswordHandler}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <p className="small text-center">
          Please enter your accounts email address.
        </p>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
