import axios from "axios";
import React, { useEffect, useState } from "react";

function MyTeam({ location }) {
  const data = location.state.team;
  const [players, setPlayers] = useState([]);
  console.log(data);
  useEffect(() => {
    if (data._id) {
      console.log(data._id);
      axios.get(`/api/auth/teams/${data._id}/players`).then((res) => {
        console.log("it's working");
        console.log(res);
      });
    }
  }, [data._id]);

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
          {/* {data.team.players.map(player=>{
                       p<
                   })} */}
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
