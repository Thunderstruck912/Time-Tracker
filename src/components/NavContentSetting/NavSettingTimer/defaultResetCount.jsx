import React from "react";
import InputBtn from "../../../UI/InputBtn/InputBtn";
import {useDispatch} from "react-redux";
import {setTotalCountAction} from "../../../store/totalCountReducer";

const DefaultResetCount = (props) => {
	const dispatch = useDispatch();

	const resetCount = () => {
		dispatch(setTotalCountAction(0));
		setTimeout(() => localStorage.removeItem("DATA:STATISTICS"));
	};
	return (
		<InputBtn tittle={props.tittle} value={props.value} reset={resetCount} />
	);
};

export default DefaultResetCount;
