import React, { useState } from "react";
import axios from "axios";

function AddMember({ teamId, addedPlayers }) {
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const addUserToTeam = (e) => {
    e.preventDefault();
    axios
      .post("/api/teams/addmember", { searchInput, teamId })
      .then((res) => {
        addedPlayers(true);
        if (res.data === "Member Added") {
          setMessage(res.data);
          setTimeout(() => {
            setMessage("");
          }, 2000);
          setSearchInput("");
        } else {
          setError(res.data);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
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
      <div className="mt-2">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

export default AddMember;
