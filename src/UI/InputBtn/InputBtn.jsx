import React from "react";
import classes from "./InputBtn.module.css";

const InputBtn = (props) => {
	return (
		<div className={classes.input_setting}>
			<span>{props.tittle}</span>
			<div className={classes.input_wrapper} onClick={props.reset}>
				<span className={classes.input_btn}>
					<input className={classes.input} type="button" value={props.value} />
				</span>
			</div>
		</div>
	);
};

export default InputBtn;
