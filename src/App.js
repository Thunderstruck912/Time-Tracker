import React from "react";
import "./style/app.css";
import NavBtn from "./UI/NavBtn/NavBtn";
import NavContentSetting from "./components/NavContentSetting/NavContentSetting";
import TotalCount from "./components/TotalCount/TotalCount";
import SkipRound from "./components/SkipRound/SkipRound";
import Tittle from "./components/Tittle/Tittle";
import Header from "./components/header/header";
import AboutInfo from "./components/Info/AboutInfo";
import Timer from "./components/Timer/Timer";
import ResetRound from "./components/ResetRound/ResetRound.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="Main">
				<NavBtn />
				<NavContentSetting />
				<Timer />
				<TotalCount />
				<SkipRound />
<<<<<<< HEAD
				<ResetRound />
=======
        			<ResetRound />
>>>>>>> 88ff045a504f68d6017bf42995db7c01208822b3
				<Tittle />
				<AboutInfo />
			</div>
		</div>
	);
}

export default App;
