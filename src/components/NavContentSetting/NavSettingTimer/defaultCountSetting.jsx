import React from "react";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useSelector, useDispatch} from "react-redux";
import {
	addDefaultCountAction,
	removeDefaultCountAction,
	setDefaultCountAction,
} from "../../../store/totalCountReducer";
import InputSetting from "../../../UI/InputSetting/InputSetting";

const DefaultCountSetting = (props) => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.totalCount);

	useLocalStorage(
		"SETTING:DEFAULT_COUNT",
		count.defaultCount,
		setDefaultCountAction,
	);

	const addDefaultCount = () => {
		if (count.defaultCount < 24) dispatch(addDefaultCountAction(1));
	};
	const removeDefaultCount = () => {
		if (count.defaultCount > 1) dispatch(removeDefaultCountAction(1));
	};
	return (
		<InputSetting
			add={addDefaultCount}
			remove={removeDefaultCount}
			value={count.defaultCount}
			tittle={props.tittle}
			count={true}
		/>
	);
};

export default DefaultCountSetting;
