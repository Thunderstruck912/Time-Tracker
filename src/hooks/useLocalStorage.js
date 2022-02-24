import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const useLocalStorage = (key, defaultValue, action) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem(key));
		if (storage !== undefined && storage !== null) {
			switch (typeof storage) {
				case "boolean":
					return dispatch(action(storage));
				case "number":
					return dispatch(action(storage));
				case "array":
					return dispatch(action(storage));
				case "object":
					return dispatch(
						action({minutes: storage.minutes, seconds: storage.seconds}),
					);
				default:
					return dispatch(action(defaultValue));
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(defaultValue));
	}, [defaultValue, key]);
};
