import React from "react";
import "../styles/Teams.css";

function Teams({ myTeams }) {
  return (
    <div className="mt-3">
      {myTeams.map((team) => (
        <div key={team._id} className="team-card">
          <div className="row text-center mb-2 p-3">
            <div className="col-4">
              <img className="team-img"
                src="https://image.shutterstock.com/image-vector/furious-eagle-head-athletic-club-260nw-693912817.jpg"
                alt=""
              />
              <span className="team-card-text">{team.teamName}</span>
            </div>
            <div className="col-4">
              <span className="team-card-text">{team.sport}</span>
            </div>
            <div className="col-4">
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teams;
