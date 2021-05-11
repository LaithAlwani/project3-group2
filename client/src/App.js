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
import Footer from "./components/Footer"

const App = () => {

  const [user, setUser] = useState("");

  const getUser = (user)=>{
    setUser(user);
  }
  return (
    <Router>
      <div className="app">
        <Navbar username={user.username}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portal">
              <Landing getUser={getUser}/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword} />
            <Route exact path="/portal/:myteam">
              <MyTeam user={user} />
            </Route>
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
            <Route path="/profile">
              <ProfilePage/>
            </Route>
            <Route exact path="/view/:teamid/:id">
              <PostView  username={user.username}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </div> 
    </Router>
  );
};

export default App;
