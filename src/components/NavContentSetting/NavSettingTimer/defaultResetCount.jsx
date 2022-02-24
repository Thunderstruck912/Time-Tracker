import React from "react";
import InputBtn from "../../../UI/InputBtn/InputBtn";
import {useDispatch} from "react-redux";
import {resetCount} from "../../../utilites/countSetting";

const DefaultResetCount = (props) => {
	const dispatch = useDispatch();

	return (
		<InputBtn
			tittle={props.tittle}
			value={props.value}
			reset={() => dispatch(resetCount())}
		/>
	);
};

export default DefaultResetCount;
