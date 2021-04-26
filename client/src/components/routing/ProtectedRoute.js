import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

// props is destructured to the component passed in (i.e., component), and all the other props (e.g., age={55}, style={{color: "red"}})
const ProectedRoute = ({ component: Component, ...remainingProps }) => {
	// role is only for if you want this component to check for both logged in and role
	const { username, role } = useContext(UserContext);
	return (
		<Route
			{...remainingProps} //the rest of the props pased in to whatever component we're gating with this ProtectedRoute
			render={props => {
				// if the user is logged in, then pass in the compoent for the page they wish to visit
				// return username && role === "Instructor" you can make an <AdminOnly /> protected route
				// return username && role === "Student" you can make an <BasicUser /> protected route
				return username ? (
					<Component {...props} />
				) : (
					// if they are not logged in, send them to a page informing them that they must login
					<Redirect
						to={{
							pathname: "/login-required",
							state: {
								from: props.location
							}
						}}
					/>
				);
			}}
		/>
	);
};

export default ProectedRoute;
