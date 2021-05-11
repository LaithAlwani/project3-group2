import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProfilePage from "./pages/ProfilePage";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MyTeam from "./components/MyTeam";
import './styles/Home.css'
import PostView from "./pages/PostView";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer"
import Landing from "./pages/Landing";


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
            <Route exact path="/teams">
              <Teams getUsername={getUsername}/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword} />
            <Route exact path="/teams/:myteam" component={MyTeam} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
            <Route path="/profile">
              <ProfilePage getUsername={getUsername}/>
            </Route>
            <Route exact path="/view/:teamid/:id">
              <PostView  username={username}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
        <Footer />
      </div> 
    </Router>
  );
};

export default App;
