import React from "react";
import classes from "./Tittle.module.css";

const Tittle = () => {
	return (
		<div className={classes.tittle_wrapper}>
			<a
				href={"https://ru.wikipedia.org/wiki/Метод_помидора"}
				value={"Pomodoro таймер"}
				target="_blank"
				rel="noopener noreferrer">
				<span>Pomodoro таймер</span>
			</a>
		</div>
	);
};

export default Tittle;
