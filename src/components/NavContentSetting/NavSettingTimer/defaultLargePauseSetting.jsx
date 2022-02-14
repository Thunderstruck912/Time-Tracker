import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {
	addLargePauseAction,
	deleteLargePauseAction,
	setLargePauseTimeAction,
} from "../../../store/timeReducer";
import InputSetting from "../../../UI/InputSetting/InputSetting";

const DefaultLargePauseSetting = (props) => {
	const dispatch = useDispatch();
	const time = useSelector((state) => state.time.largeBreak);
	useLocalStorage(
		"SETTING:LARGE_PAUSE_TIME",
		time.minutes,
		setLargePauseTimeAction,
	);

	const addLargePause = () => {
		if (time.minutes < 55) dispatch(addLargePauseAction(1));
	};

	const removeLargePause = () => {
		if (time.minutes > 5) dispatch(deleteLargePauseAction(1));
	};

	return (
		<InputSetting
			add={addLargePause}
			remove={removeLargePause}
			value={time.minutes}
			tittle={props.tittle}
		/>
	);
};

export default DefaultLargePauseSetting;
