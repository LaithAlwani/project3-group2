import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";
import axios from "axios";
import Profile from "./Profile";
import "../../styles/Profile.css";

const UpdateProfile = ({ history }) => {
  const { _id } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      setError("You are not authorized please login! redirecting to login");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login! Redirecting to login");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        `/api/users/${_id}/update`,
        { username, email, password },
        config
      );
      setSuccess(`Profile Updated Successfully`);
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      window.location.reload();
    } catch (error) {
      setError(`Email Already Exists`);
      setPassword("");
      if (error)
        setTimeout(() => {
          setError("");
        }, 2000);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 card-space">
            <Profile />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 card-space">
            <div className="card h-100 card-profile">
              <div className="card-body row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h4 className="mb-3 text">Personal Details</h4>
                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && (
                    <span className="success-message">{success}</span>
                  )}
                  <form onSubmit={submitHandler}>
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
                        placeholder="Enter Full Name"
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
                        placeholder="Email address"
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
                        minLength="6"
                        id="password"
                        autoComplete="true"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary button-sub"
                    >
                      {" "}
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
