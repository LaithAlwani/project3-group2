import axios from "axios";
import React, { useEffect, useState } from "react";
import AddMember from "./AddMember";
import { AddPost, Post } from "./Posts";

function MyTeam({ location, history }) {
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  const [message, setMessage] = useState("");

  const getPlayers = () => {
    if (data._id) {
      axios
        .get(`/api/auth/teams/${data._id}/players`)
        .then((res) => setPlayers(res.data.players))
        .catch((err) => console.log(err));
    }
  };

  const addedPlayers = () => {
    //this
  };

  const deletePlayer = (id) => {
    console.log("deleting");
    axios
      .delete("/api/auth/teams/deletemember/" + id, {
        data: { teamId: data._id },
      })
      .then((res) => {
        setMessage(res.data);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const deleteTeam = (e) => {
    e.preventDefault();
    axios
      .delete("/api/auth/teams/delete/" + data._id)
      .then((res) => history.push("/portal"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPlayers();
  }, [data._id, addedPlayers, deletePlayer]);
  return (
    <>
      <div className="container">
        <h1 className="text">{data.teamName}</h1>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center ">
                  <img
                    src={`/uploads/${data.image}`}
                    alt=""
                    className="img-fluid"
                  />
                  <button className="btn mt-2">Updated</button>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h3>Team Roster</h3>
                {players.map((player) => (
                  <>
                    <div className="card my-2">
                      <div key={player.player._id} className="d-flex p-2">
                        <div>
                          {player.player.username}
                          {player.isAdmin && <span> (Admin)</span>}
                        </div>
                        <div
                          className="far fa-trash-alt ml-auto mt-1"
                          onClick={() => deletePlayer(player.player._id)}
                        ></div>
                      </div>
                    </div>
                    {message && (
                      <div className="alert alert-danger">{message}</div>
                    )}
                  </>
                ))}
                <hr></hr>
                <div className="mt-3">
                  <h3>Add players</h3>
                  <AddMember teamId={data._id} addedPlayers={addedPlayers} />
                </div>
              </div>
            </div>
            <div className="card-mt-3">
              <div className="text-right ">
                <button className="btn btn-block mt-3" onClick={deleteTeam}>
                  Delete Team
                </button>
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
    </>
  );
}

export default MyTeam;
