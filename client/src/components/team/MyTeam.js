import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AddMember from "./AddMember";
import UpdateTeam from "./UpdateTeam";
import DeleteTeam from "./DeleteTeam";
import Post from "../post/Post";
import "../../styles/TeamPage.css";

function MyTeam({ user }) {
  const location = useLocation();
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  const [message, setMessage] = useState("");
  const [addDelPlayer, setAddDelPlayer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const getPlayers = () => {
    if (data._id) {
      axios
        .get(`/api/teams/${data._id}/players`)
        .then((res) => setPlayers(res.data.players))
        .catch((err) => console.log(err));
    }
  };

  const checkAdmin = () => {
    const checkedPlayer = data.players.find(
      (player) => player.player === user._id
    );
    setIsAdmin(checkedPlayer.isAdmin);
  };

  const addedPlayers = (value) => {
    setAddDelPlayer(true);
    setTimeout(() => {
      setAddDelPlayer(false);
    }, 100);
  };

  const deletePlayer = (id) => {
    console.log("deleting");
    axios
      .delete("/api/teams/deletemember/" + id, {
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

  useEffect(() => {
    getPlayers();
    checkAdmin();
  }, [data._id, addDelPlayer]);
  return (
    <>
      <div className="container">
        <h1 className="text text-main">{data.teamName}</h1>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-5">
            <div className="card card-view">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center ">
                  <img
                    src={`/uploads/${data.teamImage}`}
                    alt=""
                    className="img-fluid"
                  />
                  {isAdmin && <UpdateTeam />}
                </div>
              </div>
            </div>
            <div className="card card-view mt-3">
              <div className="card-body">
                <h3>Team Roster</h3>
                {players.map((player) => (
                  <div
                    key={player.player._id}
                    className={
                      player.player._id === user._id
                        ? "card my-2 current-user"
                        : "card my-2"
                    }
                  >
                    <div className="d-flex p-2">
                      <div>
                        {player.player.username}
                        {player.isAdmin && <span> (Admin)</span>}
                      </div>
                      {isAdmin && (
                        <div
                          className="far fa-trash-alt ml-auto mt-1"
                          onClick={() => deletePlayer(player.player._id)}
                        ></div>
                      )}
                    </div>
                  </div>
                ))}
                {message && <div className="alert alert-danger">{message}</div>}
                <hr></hr>
                <div className="mt-3">
                  {isAdmin && (
                    <div>
                    <h3>Add Players</h3>
                    <AddMember teamId={data._id} addedPlayers={addedPlayers} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }} className="card-mt-3">
              <div className="text-right ">{isAdmin && <DeleteTeam />}</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <h3 className="text">Team Posts</h3>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 text-secondary">
                    <div>
                      <Post isAdmin={isAdmin} />
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
