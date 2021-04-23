import React from  "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Landing = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.push("/login")
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
        setPrivateData(data.data);
    } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        }
    };

    fetchPrivateDate();
    }, [history]);

    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        history.push("/")
    }

     return error ? (
         <span ClassName= "error-message">{error}</span>
        ) : (
    <div>
    <div>{privateData}</div>
    <button onClick={logoutHandler}>LogOut</button>
    </div>
    );
};

export default Landing;