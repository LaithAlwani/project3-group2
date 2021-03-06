import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Teams.css";

function Teams({ myTeams }) {
  return (
    <div className="mt-3">
      <h1 className="text">My Teams</h1>
      {myTeams.length === 0 ? <h5 className="text">No Teams Available</h5> : 
      myTeams.map(team => (
        <Link
          className="card-link"
          to={{pathname:`/teams/${team._id}`,
          state:{team}
        }}
        key={team._id}
        >
          <div  className="team-card">
            <div className="row text-center mb-2 p-3">
              <div className="col-sm-4">
                <img className="teamcard-img"
                  src={`/uploads/${team.teamImage}`}
                  alt=""
                />
              </div>
              <div className="col-sm-4">
                <p className="mt-3">{team.teamName}</p>
              </div>
              <div className="col-sm-4">
                <p className="mt-3">{team.sport}</p>
              </div>
              
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Teams;
