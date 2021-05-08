import axios from "axios";
import React, { useEffect, useState } from "react";
import {AddPost, Post} from "./Posts"

function MyTeam({ location }) {
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  console.log(data);
  useEffect(() => {
    if (data._id) {
      console.log(data._id);
      axios.get(`/api/auth/teams/${data._id}/players`).then((res) => {
        console.log("it's working");
        setPlayers(res.data.players);
      });
    }
  }, [data._id]);

  return (
    <div>
        <h1 className="text">{data.teamName}</h1>
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={data.image} alt="" className="img-fluid" />
                  <button className="btn mt-2">Updated</button>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <h3 className= "text">Team Roster</h3>
                {players.map((player, index) => (
                <>
                <p className ="text" key={index}>{player.player.username} {player.isAdmin && <span>(Admin)</span>}</p>
                </>
                ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <h3 className= "text">Team Posts</h3>
              <div className="card-body">
                <AddPost/>
                <div className="row">
                  <div className="col-sm-12 text-secondary">
                    <div>
                    <Post/>
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
