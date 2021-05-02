import React from "react";


// A jumbotron indicates a big box for calling extra attention to some special content or information

function Jumbotron({ children }) {
  return(
    <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron">

      {children}
    </div>
  );
}


export default Jumbotron;