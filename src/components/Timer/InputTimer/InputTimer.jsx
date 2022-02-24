import React from "react";
import classes from "./InputTimer.module.css";
import {useDispatch} from "react-redux";
import {setStatusAction} from "../../../store/timerStatus";

const InputTimer = ({status}) => {
	const dispatch = useDispatch();
	return (
		<>
			{!status.play ? (
				<div
					className={classes.btn}
					onClick={() => dispatch(setStatusAction({play: !status.play}))}>
					<input type="button" className={classes.btn_play} autoFocus />
				</div>
			) : (
				<div
					className={classes.btn}
					onClick={() => dispatch(setStatusAction({play: !status.play}))}>
					<input type="button" className={classes.btn_stop} autoFocus />
				</div>
			)}
		</>
	);
};

export default InputTimer;
