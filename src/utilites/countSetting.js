import {setTotalCountAction} from "../store/totalCountReducer";
import {resetTimeAction} from "../store/timeReducer";
import {setStatusAction} from "../store/timerStatus";

export const resetCount = () => {
	return (dispatch) => {
		dispatch(setStatusAction({play: false}));
		dispatch(setTotalCountAction(0));
		dispatch(resetTimeAction());
		setTimeout(() => localStorage.removeItem("DATA:STATISTICS"));
	};
};
