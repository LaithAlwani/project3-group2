import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Home = () => {
	const { username, role } = useContext(UserContext);
	return (
		<div>
			<h1>Project 3 Group 2</h1>
			<ul>
				<li>
					<p>Welcome back {username}!</p>
					<p>You are a/an {role}!</p>
					{role === "Instructor" && <p>You're only able to see THIS if you're an instructor</p>}
					{role === "Student" && <p>You're only able to see THIS if you're a student</p>}
					<Link to="/register"> Sign Up </Link>
				</li>
				<li>
					<Link to="/login"> Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
