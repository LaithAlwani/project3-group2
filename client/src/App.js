import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/portal" component={Landing} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword"component={ForgotPassword}/>
          <Route exact path="/passwordreset/:resetToken"component={ResetPassword}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;