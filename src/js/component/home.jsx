import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="Semaforo"></div>
			<div className="GreenLight"></div>
			<div className="YellowLight"></div>
			<div className="RedLight"></div>
		</div>
	);
};

export default Home;
