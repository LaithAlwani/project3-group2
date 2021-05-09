import React, { useState } from "react";
import Teams from "./Teams";
import AddTeam from "./AddTeam";

function LandingPageContainer() {
  const [showTeams, setShowTeams] = useState(true);

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-sm-3">

        </div>
        <div className="col-sm-9">
          {/* <MyTeams/> */}
          <button className="btn btn-warning" onClick={setShowTeams(false)}>
            Create a Team
          </button>
          {showTeams && <Teams />}
          {!showTeams && <AddTeam />}
        </div>
      </div>
    </div>
  );
}

export default LandingPageContainer;
