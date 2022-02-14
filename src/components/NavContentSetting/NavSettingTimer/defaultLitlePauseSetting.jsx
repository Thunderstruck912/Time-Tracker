import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {
	addLittlePauseAction,
	deleteLittlePauseAction,
	setLittlePauseTimeAction,
} from "../../../store/timeReducer";
import InputSetting from "../../../UI/InputSetting/InputSetting";

const DefaultLitlePauseSetting = (props) => {
	const dispatch = useDispatch();
	const time = useSelector((state) => state.time.littleBreak);

	useLocalStorage(
		"SETTING:LITTLE_PAUSE_TIME",
		time.minutes,
		setLittlePauseTimeAction,
	);

	const addLittlePause = () => {
		if (time.minutes < 30) dispatch(addLittlePauseAction(1));
	};
	const removeLittlePause = () => {
		if (time.minutes > 1) dispatch(deleteLittlePauseAction(1));
	};
	return (
		<InputSetting
			add={addLittlePause}
			remove={removeLittlePause}
			value={time.minutes}
			tittle={props.tittle}
		/>
	);
};

export default DefaultLitlePauseSetting;
