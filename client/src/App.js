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
import MyTeam from "./components/team/MyTeam";
import PostView from "./pages/PostView";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import "./App.css";
import Wrapper from "./components/Wrapper";

const App = () => {
  const [user, setUser] = useState("");

  const getUser = (user) => {
    setUser(user);
  };
  return (
    <Router>
      <Wrapper>
        <Navbar username={user.username} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portal">
            <Landing getUser={getUser} />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
          <Route exact path="/teams/:myteam">
            <MyTeam user={user} />
          </Route>
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
          <Route path="/profile">
            <ProfilePage getUser={getUser} />
          </Route>
          <Route exact path="/view/:teamid/:id">
            <PostView />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
};

export default App;
