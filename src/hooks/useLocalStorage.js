import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const useLocalStorage = (key, defaultValue, action) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem(key));
		switch (typeof storage) {
			case "boolean":
				return dispatch(action(storage));
			case "number":
				return dispatch(action(storage));
			default:
				return dispatch(action(defaultValue));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(defaultValue));
	}, [defaultValue, key]);
};
