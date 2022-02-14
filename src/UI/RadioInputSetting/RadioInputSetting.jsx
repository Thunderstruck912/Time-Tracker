import React from "react";
import classes from "./RadioInputSetting.module.css";

const RadioInputSetting = (props) => {
	return (
		<div className={classes.radio_setting}>
			<span>{props.tittle}</span>
			<div className={classes.radio_wrapper}>
				<span
					className={props.status ? `${classes.active}` : `${classes.disabled}`}
					onClick={props.swipe}>
					{props.value_on}
				</span>
				<span
					className={props.status ? `${classes.disabled}` : `${classes.active}`}
					onClick={props.swipe}>
					{props.value_off}
				</span>
			</div>
		</div>
	);
};

export default RadioInputSetting;
