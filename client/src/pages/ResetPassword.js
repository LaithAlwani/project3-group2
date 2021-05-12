import { useState } from "react";
import React from "react";
import axios from "axios";
import "../styles/ResetPassword.css";

const ResetPassword = ({ match, history }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={resetPasswordHandler}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error} </span>}
        {success && <span className="success-message">{success}</span>}
        <label htmlFor="password">New Password:</label>
        <div className="input-group">
          <span className="input-group-addon">
            <span className="fas fa-lock icon"></span>
          </span>
          <input
            type="password"
            className="form-control"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label htmlFor="confirmpassword">Confirm New Password:</label>
        <div className="input-group">
          <span className="input-group-addon">
            <span className="fas fa-lock icon"></span>
          </span>
          <input
            type="password"
            className="form-control"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
