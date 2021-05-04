import React, { useState } from "react";
import Teams from "./Teams";
import AddTeam from "./AddTeam";

function MyTeamContainer() {
  const [showTeams, setShowTeams] = useState(true);
  const [myTeams, setMyTeams] = useState([]);  

  //create a method that gets all teams for the user 

  const  getShowTeams = (value)=>{
      setShowTeams(value)
  }
  return (
    <div className="mt-3">
      <div className="text-right">
        <button className="btn" onClick={() => setShowTeams(false)}>
          Create Team
        </button>
      </div>

      {showTeams && <Teams />}
      {!showTeams && <AddTeam getShowTeams={getShowTeams} />}
    </div>
  );
}

export default MyTeamContainer;
