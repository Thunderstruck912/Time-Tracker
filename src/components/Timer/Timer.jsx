import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setTimeAction, resetTimeAction} from "../../store/timeReducer";
import {setStatusAction, setLittlePauseAction} from "../../store/timerStatus";
import {
	defaultTimerSetting,
	timerPauseSetting,
} from "../../utilites/timerSettings";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import InputTimer from "../../UI/InputTimer/InputTimer";
import classes from "../Timer/Timer.module.css";

const firstTimeStatus = "DATA:FIRST_TIME_STATUS";
const timerTime = "DATA:TIMER";

const Timer = () => {
	const dispatch = useDispatch();
	const timer = useSelector((state) => state.time.timer);
	const status = useSelector((state) => state.status);
	const totalCount = useSelector((state) => state.totalCount.totalCount);
	const [firstRun, setFirstRun] = useState(
		localStorage.getItem(firstTimeStatus) || true,
	);
	useLocalStorage(
		"SETTING:LITTLE_PAUSE_STATUS",
		status.littlePause,
		setLittlePauseAction,
	);
	let updateM = timer.minutes,
		updateS = timer.seconds;

	useEffect(() => {
		localStorage.setItem(firstTimeStatus, firstRun);
	}, [firstRun]);

	useEffect(() => {
		if (!firstRun) {
			if (timer !== undefined && timer.minutes !== 0) {
				localStorage.setItem(timerTime, JSON.stringify(timer));
			}
		}
	}, [timer]);

	useEffect(() => {
		if (localStorage.getItem(timerTime)) {
			let t = JSON.parse(localStorage.getItem(timerTime));
			dispatch(setTimeAction({minutes: t.minutes, seconds: t.seconds}));
		} else {
			dispatch(resetTimeAction());
		}
	}, []);

	useEffect(() => {
		if (status.littlePause && status.reloadStatus)
			dispatch(setStatusAction({play: true}));
	}, [status.littlePause]);

	useEffect(() => {
		if (status.play) {
			if (firstRun) setFirstRun(false);
			const intervalId = setInterval(() => {
				if (updateM === 0 && updateS === 1) {
					dispatch(setStatusAction({play: !status.play}));
					if (!status.littlePause) {
						dispatch(timerPauseSetting({status, totalCount}));
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

	const setRun = () => setFirstRun(false);

	return (
		<div className={classes.timer}>
			<div className={classes.span_wrapper}>
				<span className={classes.span}>
					{timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes}
				</span>
				<span className={classes.span}>:</span>
				<span className={classes.span}>
					{timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds}
				</span>
			</div>
			<div className={classes.img}>
				<div
					className={classes.wrapper_img}
					style={{marginLeft: -(timer.minutes * 60 + timer.seconds)}}>
					<img src={require("./icon/scale.png")} alt={1}></img>
				</div>
			</div>
			<InputTimer status={status} setFirstRun={setRun} />
		</div>
	);
};

export default Timer;
