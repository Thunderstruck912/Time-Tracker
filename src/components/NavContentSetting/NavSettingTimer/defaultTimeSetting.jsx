import React from "react";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useSelector, useDispatch} from "react-redux";
import {
	addDefaultTimeAction,
	deleteDefaultTimeAction,
	setDefaultTimeAction,
} from "../../../store/timeReducer";
import InputSetting from "../../../UI/InputSetting/InputSetting";

const DefaultTimeSetting = (props) => {
	const dispatch = useDispatch();
	const time = useSelector((state) => state.time.defaultTime);
	useLocalStorage("SETTING:DEFAULT_TIME", time.minutes, setDefaultTimeAction);

	const addDefaultTime = () => {
		if (time.minutes < 55) dispatch(addDefaultTimeAction(1));
	};

	const removeDefaultTime = () => {
		if (time.minutes > 10) dispatch(deleteDefaultTimeAction(1));
	};

	return (
		<InputSetting
			add={addDefaultTime}
			remove={removeDefaultTime}
			value={time.minutes}
			tittle={props.tittle}
		/>
	);
};

export default DefaultTimeSetting;
