import React from "react";
import classes from "./ResetRound.module.css";
import {useSelector, useDispatch} from "react-redux";
import {resetPause, resetRound} from "../../utilites/timerSettings";

const ResetRound = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.status.littlePause);
	const count = useSelector((state) => state.totalCount);

	return (
		<div className={classes.skip_wrapper}>
			{!status ? (
				<span
					onClick={() => {
						dispatch(resetRound());
					}}>
					Обновить раунд
				</span>
			) : (
				<span onClick={() => dispatch(resetPause({count}))}>
					Обновить паузу
				</span>
			)}
		</div>
	);
};

export default ResetRound;
