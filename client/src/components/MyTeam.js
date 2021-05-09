import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchUser from "./AddMember";
import { DeleteTeam, UpdateTeam } from "./AddTeam";
import { AddPost, Post } from "./Posts";

function MyTeam({ location, history }) {
  
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  
  const getPlayers = () => {
    if (data._id) {
      axios
      .get(`/api/auth/teams/${data._id}/players`)
      .then((res) => setPlayers(res.data.players))
      .catch((err) => console.log(err));
    }
  };
  
  const addedPlayers = ()=>{
    //this 
  }
  
  useEffect(() => {
    getPlayers();
  }, [data._id, addedPlayers]);
  return (
    <div>
      <div className="container">
      <h1 className="text">{data.teamName}</h1>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center ">
                  <img src={`/uploads/${data.teamImage}`} alt="" className="img-fluid" />
                  <UpdateTeam />
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
              <h3>Team Roster</h3>
              {players.map((player) => (
                <div key={player.player._id}>
                  <span>{player.player.username}</span>
                  {
                  player.isAdmin && <span> (Admin)</span>
                  }
                </div>
              ))}
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
              <h3>Add players</h3>
              <SearchUser teamId={data._id} addedPlayers={addedPlayers} />
              </div>
            </div>
            <div className="card-mt-3">
              <div className="text-right ">
                <DeleteTeam />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <h3 className="text">Team Posts</h3>
              <div className="card-body">
                <AddPost />
                <div className="row">
                  <div className="col-sm-12 text-secondary">
                    <div>
                      <Post />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
