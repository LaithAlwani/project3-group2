import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './styles/Home.css'

const App = () => {

  const [username, setUsername] = useState("");

  const getUsername = (username)=>{
    setUsername(username);
  }
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <Navbar username={username}/>
            <PrivateRoute exact path="/portal">
              <Landing getUsername={getUsername}/>
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route
              exact
              path="/passwordreset/:resetToken"
              component={ResetPassword}
            />
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
