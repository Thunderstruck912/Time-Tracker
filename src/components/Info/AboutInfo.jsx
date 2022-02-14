import React from "react";
import classes from "./AboutInfo.module.css";

const Info = () => {
	return (
		<div className={classes.info_wrapper}>
			<a
				href={"https://ru.wikipedia.org/wiki/Метод_помидора"}
				target="_blank"
				rel="noopener noreferrer">
				<span className={classes.span}>О таймере</span>
			</a>

			<a
				href={"https://github.com/Thunderstruck912/Time-Tracker-React-Redux"}
				target="_blank"
				rel="noopener noreferrer">
				<img
					className={classes.img}
					src={require("./icon/GitHub-Mark-Light-64px.png")}
					alt="1"
				/>
			</a>
		</div>
	);
};

export default Info;
