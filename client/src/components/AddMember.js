import axios from "axios";
import React, { useState } from "react";

function AddMember({teamId,addedPlayers}) {
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
    
  };
  
  const addUserToTeam = (e) => {
    e.preventDefault();
    console.log(searchInput);
    axios.post("/api/auth/teams/addmember", {searchInput,teamId})
    .then(res=> {
        addedPlayers();
        console.log(res.data)
        if(res.data === "Member Added"){
            setMessage(res.data)
            setTimeout(()=>{
                setMessage("")
            },2000);
            setSearchInput("")
        }else{
            setError(res.data);
            setTimeout(()=>{
                setError("")
            },2000)
        }
    })
    .catch(err => console.log(err));

  };
  return (
    <div>
      <form onSubmit={addUserToTeam}>
        <input
          type="email"
          className="form-control"
          placeholder="Player email"
          value={searchInput}
          onChange={handleInputChange}
          required
        />
      </form>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default AddMember;
