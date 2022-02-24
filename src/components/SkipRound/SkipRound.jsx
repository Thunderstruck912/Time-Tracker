import React from "react";
import classes from "./SkipRound.module.css";
import {useSelector, useDispatch} from "react-redux";
import {
	defaultTimerSetting,
	timerPauseSetting,
} from "../../utilites/timerSettings";

const SkipRound = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.status.littlePause);
	const count = useSelector((state) => state.totalCount);

	return (
		<div className={classes.skip_wrapper}>
			{status ? (
				<span onClick={() => dispatch(defaultTimerSetting())}>
					Пропустить перерыв
				</span>
			) : (
				<span onClick={() => dispatch(timerPauseSetting({status, count}))}>
					Пропустить раунд
				</span>
			)}
		</div>
	);
};

export default SkipRound;
