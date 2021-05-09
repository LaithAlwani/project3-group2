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
import NotFound from "./pages/NotFound";

const App = () => {

  const [username, setUsername] = useState("");

  const getUsername = (username)=>{
    setUsername(username);
  }
  return (
    <Router>
      <div className="app">
        <Navbar username={username}/>
          <Switch>
            <Route exact path="/" component={Home} />
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
            <Route exact path="/view/:id">
              <PostView  username={username}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Switch>
      </div> 
    </Router>
  );
};

export default App;
