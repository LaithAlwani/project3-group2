import React from "react";
import { Link} from "react-router-dom";
import UserContext from "../utils/UserContext";


const NotFound = () => {
    const {username} = UserContext
 
  return  (
    
    <UserContext.Provider value={username}>
       <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <span className="display-1 d-block">404</span>
                    <div className="mb-4 lead">The page you are looking for was not found.</div>
                    <Link to="/portal"><button className="btn btn-main">Back to Home</button></Link>
                </div>
            </div>
        </div>
    </div>
    </UserContext.Provider>
  );
};

export default NotFound;



