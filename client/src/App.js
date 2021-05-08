import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProfilePage from "./pages/ProfilePage";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MyTeam from "./components/MyTeam";
import './styles/Home.css'
import PostView from "./pages/PostView";

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
            <Route exact path="/portal">
              <Landing getUsername={getUsername}/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword} />
            <Route exact path="/portal/:myteam" component={MyTeam} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
            <Route path="/profile">
              <ProfilePage getUsername={getUsername}/>
            </Route>
            <Route exact path="/update/:id" component={PostView} />
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

