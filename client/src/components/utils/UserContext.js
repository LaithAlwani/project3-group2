import React from "react";

const UserContext = React.createContext({
	name: "",
	mood: "",
	lifeLongLearner: false,
	excitementLevel: 0
});

export default UserContext;
