import React from "react";
import classes from "./TimerSpan.module.css";

const TimerSpan = ({timer}) => {
	return (
		<div className={classes.span_wrapper}>
			<span className={classes.span}>
				{timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes}
			</span>
			<span className={classes.span}>:</span>
			<span className={classes.span}>
				{timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds}
			</span>
		</div>
	);
};

export default TimerSpan;
