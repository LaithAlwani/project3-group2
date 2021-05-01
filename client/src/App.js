import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route exact path="/"  >
            <Home />
          </Route>
          <>
            <Navbar username={username}/>
            <Route path="/portal">
              <Landing getUsername={getUsername}/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
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
