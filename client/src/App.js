import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";
import API from "./components/utils/API";
import UserContext from "./components/utils/UserContext";
import ProectedRoute from "./components/routing/ProtectedRoute";
import MyProtectedPage from "./components/pages/MyProtectedPage";
import LoginRequired from "./components/routing/LoginRequired";

// request all user data, set as state, then render user name

const App = () => {
	const [user, setUserState] = useState([
		{
			id: "",
			username: "",
			eamil: "",
			password: "",
			role: "",
			userCreated: ""
		}
	]);

	useEffect(() => {
		loadTestUser();
	}, []);

	const loadTestUser = () => {
		console.log("loadTestUser function triggered...");
		API.getSingleUser("608442f9e92b2517804d62e0") // instructor
			// API.getSingleUser("608597beb0f6bb11f8ed6631") // student
			.then(res => {
				console.log(res.data);
				setUserState(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<UserContext.Provider value={user}>
			<Router>
				<div className="app">
					{/* conditional rendering based on role */}
					{user.role === "instructor" && (
						<div key={user._id}>
							<p>Name: {user.username}</p>
							<p>Role: {user.role}</p>
						</div>
					)}

					{user.role === "student" && (
						<div key={user._id}>
							<p>Name: {user.username}</p>
							<p>Role: {user.role}</p>
						</div>
					)}
					<Switch>
						<PrivateRoute exact path="/portal" component={Landing} />
						{/* take them to the page or redirect them depending on their logged in status */}
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/forgotpassword" component={ForgotPassword} />
						<Route exact path="/passwordreset/:resetToken" component={ResetPassword} />
						<Route exact path="/login-required" component={LoginRequired} />
						<ProectedRoute exact path="/secret-age" component={MyProtectedPage} />
					</Switch>
					<Link to="/secret-age"> Super Secret Page </Link>
				</div>
			</Router>
		</UserContext.Provider>
	);
};

export default App;
