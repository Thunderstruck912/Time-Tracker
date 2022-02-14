import React from "react";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useSelector, useDispatch} from "react-redux";
import {
	removeRoundAction,
	addRoundAction,
	setRoundAction,
} from "../../../store/totalCountReducer";
import InputSetting from "../../../UI/InputSetting/InputSetting";

const DefaultRoundSetting = (props) => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.totalCount);

	useLocalStorage("SETTING:ROUND_COUNT", count.roundCount, setRoundAction);

	const addRoundCount = () => {
		if (count.roundCount < 10) dispatch(addRoundAction(1));
	};
	const removeRoundCount = () => {
		if (count.roundCount > 2) dispatch(removeRoundAction(1));
	};

	return (
		<InputSetting
			add={addRoundCount}
			remove={removeRoundCount}
			value={count.roundCount}
			tittle={props.tittle}
			count={true}
		/>
	);
};

export default DefaultRoundSetting;
