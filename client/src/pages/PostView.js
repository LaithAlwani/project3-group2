import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import  ViewPost  from "../components/post/ViewPost";



const PostView = () => {

  const history = useHistory();
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
        await axios.get("/api/private", config);
        
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login! Redirecting to login");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  ) : (
    <div>
        <ViewPost />
    </div>


  );
};

export default PostView;