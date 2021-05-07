import React from "react";
import { Link } from "react-router-dom";
import "../styles/Teams.css";

function Teams({ myTeams }) {
  return (
    <div className="mt-3">
      {myTeams.map(team => (
        <Link
          to={{pathname:`/portal/${team._id}`,
          state:{team}
        }}
        key={team._id}
        >
          <div  className="team-card">
            <div className="row text-center mb-2 p-3">
              <div className="col-4">
                <img
                  src={team.image}
                  alt=""
                />
                <span className="">{team.teamName}</span>
              </div>
              <div className="col-4">
                <p className="mt-3">{team.sport}</p>
              </div>
              <div className="col-4 ">
                <button className="btn mt-3">Delete</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Teams;
