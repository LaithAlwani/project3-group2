import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Home = () => {
	const { username, role } = useContext(UserContext);
	return (
		<div>
			<h1>Much Protection. Very secure.</h1>
			<p>Welcome back {username}!</p>
			<p>You are a/an {role}!</p>
			{role === "Instructor" && (
				<p>
					You're only able to see THIS if you're <b>logged in</b> AND an <b>instructor</b>
				</p>
			)}
			{role === "Student" && (
				<p>
					You're only able to see THIS if you're <b>logged in</b> AND a <b>student</b>
				</p>
			)}
		</div>
	);
};

export default Home;
