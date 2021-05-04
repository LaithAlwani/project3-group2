import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";

function AddTeam({ getShowTeams }) {
  const { _id } = useContext(UserContext);
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      
      
      const {data} = await axios.post(
        
        "api/auth/createteam",
        {
          _id,
          teamName,
          sport,
        },
        config
        
      );
      console.log(data);
      
      // console.log(_id, teamName, sport); 
    }
    
    catch (error) {
        console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    
  };
  return (
    <>
      {error && <span className="error-message">{error}</span>}
      <div className="text-center mt-4">
        <h3>please enter the team informaitoin</h3>
        <form onSubmit={handleSubmit} className="add-team-form">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="team-name"
              placeholder="Team Name"
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="sport"
              placeholder="Sport"
              onChange={(e) => setSport(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-block" type="submit">
            Create Team
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTeam;
