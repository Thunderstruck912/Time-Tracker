const defaultState = {
	play: false,
	littlePause: false,
	reloadStatus: false,
	sound: true,
};
const SET_STATUS = "SET_STATUS";
const SET_LITTLE_PAUSE = "SET_LITTLE_PAUSE";
const SOUND_STATUS = "SOUND_STATUS";
const RELOAD_STATUS = "RELOAD_STATUS";

export const statusTimerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_STATUS:
			return {...state, play: action.payload.play};
		case SET_LITTLE_PAUSE:
			return {...state, littlePause: action.payload};
		case SOUND_STATUS:
			return {...state, sound: action.payload};
		case RELOAD_STATUS:
			return {...state, reloadStatus: action.payload};
		default:
			return state;
	}
};

export const setStatusAction = (payload) => ({type: SET_STATUS, payload});
export const setLittlePauseAction = (payload) => ({
	type: SET_LITTLE_PAUSE,
	payload,
});
export const setSoundStatusAction = (payload) => ({
	type: SOUND_STATUS,
	payload,
});
export const setReloadStatusAction = (payload) => ({
	type: RELOAD_STATUS,
	payload,
});
