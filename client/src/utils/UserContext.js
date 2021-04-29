import React from "react";

const UserContext = React.createContext({
  username: "",
  email: "",
  _id: "",
  teams:""
});

export default UserContext;
