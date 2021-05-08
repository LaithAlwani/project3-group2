import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchUser from "./SearchUser";

function MyTeam({ location }) {
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getPlayers();
  }, [data._id, addedPlayers]);

  const getPlayers = ()=>{
    if (data._id) {
      axios
        .get(`/api/auth/teams/${data._id}/players`)
        .then((res) => setPlayers(res.data.players))
        .catch((err) => console.log(err));
    }
  }

  const addedPlayers = ()=>{
    getPlayers();
  }

  return (
    <div className="container mt-3">
      <h1>{data.teamName}</h1>

      <div className="row text-center">
        <div className="col-md-2">
          <img src={data.image} alt="" className="img-fluid" />
          <button className="btn mt-2">Updated</button>
        </div>
        <div className="col-md-6">
          <h3>Posts</h3>
        </div>
        <div className="col-md-4">
          <h3>Team Roster</h3>
          {players.map((player) => (
            <div key={player.player._id}>
              <span>{player.player.username}</span>
              {player.isAdmin && <span> (Admin)</span>}
            </div>
          ))}
          <h3>Add players</h3>
          <SearchUser teamId={data._id} addedPlayers={addedPlayers} />
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
