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

export const timerPauseSetting = ({status, count}) => {
	return (dispatch) => {
		dispatch(setReloadStatusAction(true));
		if ((count.totalCount + 1) % count.roundCount === 0) {
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

export const resetRound = () => {
	return (dispatch) => {
		dispatch(setStatusAction({play: false}));
		dispatch(resetTimeAction());
	};
};

export const resetPause = ({count}) => {
	return (dispatch) => {
		dispatch(setStatusAction({play: false}));
		if (count.totalCount % count.roundCount === 0) {
			dispatch(resetLargePauseTimeAction());
		} else dispatch(resetLittlePauseTimeAction());
	};
};
