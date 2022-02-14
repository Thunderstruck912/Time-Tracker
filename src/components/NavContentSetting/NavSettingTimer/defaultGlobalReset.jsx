import React from "react";
import InputBtn from "../../../UI/InputBtn/InputBtn";
import {useDispatch} from "react-redux";
import {resetAllTimerAction} from "../../../store/timeReducer";
import {allCountResetAction} from "../../../store/totalCountReducer";
import {setSoundStatusAction} from "../../../store/timerStatus";

const DefaultGlobalReset = (props) => {
	const dispatch = useDispatch();

	const globalReset = () => {
		dispatch(resetAllTimerAction());
		dispatch(allCountResetAction());
		dispatch(setSoundStatusAction(true));
	};
	return (
		<InputBtn tittle={props.tittle} value={props.value} reset={globalReset} />
	);
};

export default DefaultGlobalReset;
