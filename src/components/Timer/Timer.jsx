import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setTimeAction} from "../../store/timeReducer";
import {
	setStatusAction,
	setLittlePauseAction,
	setFirstRunAction,
} from "../../store/timerStatus";
import {
	defaultTimerSetting,
	timerPauseSetting,
} from "../../utilites/timerSettings";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import InputTimer from "./InputTimer/InputTimer";
import TimerSpan from "./TimerSpan/TimerSpan";
import TimerImg from "./TimerImg/TimerImg";
import classes from "../Timer/Timer.module.css";

const Timer = () => {
	const dispatch = useDispatch();
	const timer = useSelector((state) => state.time.timer);
	const status = useSelector((state) => state.status);
	const count = useSelector((state) => state.totalCount);
	let updateM = timer.minutes,
		updateS = timer.seconds;

	// SAVE AND LOAD LOCAL STORAGE //

	useLocalStorage("DATA:TIMER", timer, setTimeAction);

	useLocalStorage(
		"SETTING:LITTLE_PAUSE_STATUS",
		status.littlePause,
		setLittlePauseAction,
	);

	useLocalStorage(
		"DATA:FIRST_RUN_STATUS",
		status.firstRunStatus,
		setFirstRunAction,
	);

	// AUTO PLAY AFTER ROUND //

	useEffect(() => {
		if (status.littlePause && status.reloadStatus)
			dispatch(setStatusAction({play: true}));
	}, [status.littlePause]);

	// TIMER CORE // DONT TOUCH !!! //

	useEffect(() => {
		if (status.play) {
			if (status.firstRunStatus) dispatch(setFirstRunAction(false));
			const intervalId = setInterval(() => {
				if (updateM === 0 && updateS === 1) {
					dispatch(setStatusAction({play: !status.play}));
					if (!status.littlePause) {
						dispatch(timerPauseSetting({status, count}));
						return clearInterval(intervalId);
					} else dispatch(defaultTimerSetting());
					return clearInterval(intervalId);
				}
				if (updateS === 0) {
					updateS = 60;
					updateM--;
				}
				updateS--;
				dispatch(setTimeAction({minutes: updateM, seconds: updateS}));
			}, 1000);
			return () => clearInterval(intervalId);
		}
	}, [status.play, status.littlePause]);

	return (
		<div className={classes.timer}>
			<TimerSpan timer={timer} />
			<TimerImg timer={timer} />
			<InputTimer status={status} />
		</div>
	);
};

export default Timer;
