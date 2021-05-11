import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";
import Teams from "./Teams";
import AddTeam from "./AddTeam";
import axios from "axios";

function MyTeamContainer() {
  const { _id } = useContext(UserContext);
  const [showTeams, setShowTeams] = useState(true);
  const [myTeams, setMyTeams] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUserTeams();
  }, [_id, showTeams]);

  const getUserTeams = () => {
    if (_id) {
      axios
        .get(`/api/users/${_id}/teams`)
        .then((res) => setMyTeams(res.data.teams));
    }
  };

  const getShowTeams = (value) => {
    setShowTeams(value);
    setMessage("Team Created");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  return (
    <div className="container mt-3">
      <div className="card card-view">
        <div className="card-body">
          {showTeams && (
            <div className="text-right">
              <button className="btn" onClick={() => setShowTeams(false)}>
                Create Team
              </button>
            </div>
          )}
          <h1 className="text">My Teams</h1>
          {message && <div className="alert alert-success">{message}</div>}
          {showTeams && <Teams myTeams={myTeams} />}
          {!showTeams && <AddTeam getShowTeams={getShowTeams} />}
        </div>
      </div>
    </div>
  );
}

export default MyTeamContainer;
