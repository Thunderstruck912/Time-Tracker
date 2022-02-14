import {
	resetTimeAction,
	resetLittlePauseTimeAction,
	resetLargePauseTimeAction,
} from "../store/timeReducer";
import {
	setStatusAction,
	setLittlePauseAction,
	setReloadStatusAction,
} from "../store/timerStatus";
import {addTotalCountAction} from "../store/totalCountReducer";

export const defaultTimerSetting = () => {
	return (dispatch) => {
		dispatch(setReloadStatusAction(true));
		dispatch(resetTimeAction());
		dispatch(setLittlePauseAction(false));
		dispatch(setStatusAction({play: true}));
	};
};

export const timerPauseSetting = ({status, totalCount}) => {
	return (dispatch) => {
		dispatch(setReloadStatusAction(true));
		if ((totalCount + 1) % 3 === 0) {
			dispatch(setLittlePauseAction(!status.littlePause));
			dispatch(resetLargePauseTimeAction());
			dispatch(addTotalCountAction(1));
			return;
		} else dispatch(setLittlePauseAction(!status.littlePause));
		dispatch(resetLittlePauseTimeAction());
		dispatch(addTotalCountAction(1));
		return;
	};
};
