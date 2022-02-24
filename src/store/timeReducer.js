const defaultState = {
	timer: {
		minutes: 25,
		seconds: 0,
	},
	defaultTime: {
		minutes: 25,
		seconds: 0,
	},
	littleBreak: {
		minutes: 5,
		seconds: 0,
	},
	largeBreak: {
		minutes: 20,
		seconds: 0,
	},
};

const SET_TIME = "SET_TIME";
const RESET_TIME = "RESET_TIME";

const SET_DEFAULT_TIME = "SET_DEFAULT_TIME";
const ADD_DEFAULT_TIME = "ADD_DEFAULT_TIME";
const DELETE_DEFAULT_TIME = "DELETE_DEFAULT_TIME";

const SET_LITTLE_PAUSE_TIME = "SET_LITTLE_PAUSE_TIME";
const RESET_LITTLE_PAUSE_TIME = "RESET_LITTLE_PAUSE_TIME";
const ADD_LITTLE_PAUSE_TIME = "ADD_LITTLE_PAUSE_TIME";
const DELETE_LITTLE_PAUSE_TIME = "DELETE_LITTLE_PAUSE_TIME";

const SET_LARGE_PAUSE_TIME = "SET_LARGE_PAUSE_TIME";
const RESET_LARGE_PAUSE_TIME = "RESET_LARGE_PAUSE_TIME";
const ADD_LARGE_PAUSE_TIME = "ADD_LARGE_PAUSE_TIME";
const DELETE_LARGE_PAUSE_TIME = "DELETE_LARGE_PAUSE_TIME";

const ALL_TIMER_RESET = "ALL_TIMER_RESE";

export const timeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_TIME:
			return {
				...state,
				timer: {
					minutes: action.payload.minutes,
					seconds: action.payload.seconds,
				},
			};
		case RESET_TIME:
			return {
				...state,
				timer: {
					minutes: state.defaultTime.minutes,
					seconds: state.defaultTime.seconds,
				},
			};

		case ADD_DEFAULT_TIME:
			return {
				...state,
				defaultTime: {
					minutes: state.defaultTime.minutes + action.payload,
					seconds: state.defaultTime.seconds,
				},
			};
		case DELETE_DEFAULT_TIME:
			return {
				...state,
				defaultTime: {
					minutes: state.defaultTime.minutes - action.payload,
					seconds: state.defaultTime.seconds,
				},
			};
		case SET_DEFAULT_TIME:
			return {
				...state,
				defaultTime: {
					minutes: action.payload,
					seconds: state.defaultTime.seconds,
				},
			};

		case SET_LITTLE_PAUSE_TIME:
			return {
				...state,
				littleBreak: {
					minutes: action.payload,
					seconds: state.littleBreak.seconds,
				},
			};
		case RESET_LITTLE_PAUSE_TIME:
			return {
				...state,
				timer: {
					minutes: state.littleBreak.minutes,
					seconds: state.littleBreak.seconds,
				},
			};
		case ADD_LITTLE_PAUSE_TIME:
			return {
				...state,
				littleBreak: {
					minutes: state.littleBreak.minutes + action.payload,
					seconds: state.littleBreak.seconds,
				},
			};
		case DELETE_LITTLE_PAUSE_TIME:
			return {
				...state,
				littleBreak: {
					minutes: state.littleBreak.minutes - action.payload,
					seconds: state.littleBreak.seconds,
				},
			};

		case SET_LARGE_PAUSE_TIME:
			return {
				...state,
				largeBreak: {
					minutes: action.payload,
					seconds: state.largeBreak.seconds,
				},
			};
		case RESET_LARGE_PAUSE_TIME:
			return {
				...state,
				timer: {
					minutes: state.largeBreak.minutes,
					seconds: state.largeBreak.seconds,
				},
			};
		case ADD_LARGE_PAUSE_TIME:
			return {
				...state,
				largeBreak: {
					minutes: state.largeBreak.minutes + action.payload,
					seconds: state.largeBreak.seconds,
				},
			};
		case DELETE_LARGE_PAUSE_TIME:
			return {
				...state,
				largeBreak: {
					minutes: state.largeBreak.minutes - action.payload,
					seconds: state.largeBreak.seconds,
				},
			};

		case ALL_TIMER_RESET:
			return {
				...state,
				largeBreak: {
					minutes: defaultState.largeBreak.minutes,
					seconds: defaultState.largeBreak.seconds,
				},
				littleBreak: {
					minutes: defaultState.littleBreak.minutes,
					seconds: defaultState.littleBreak.seconds,
				},
				defaultTime: {
					minutes: defaultState.defaultTime.minutes,
					seconds: defaultState.defaultTime.seconds,
				},
			};
		default:
			return state;
	}
};

export const setTimeAction = (payload) => ({type: SET_TIME, payload});
export const resetTimeAction = (payload) => ({type: RESET_TIME, payload});

export const setDefaultTimeAction = (payload) => ({
	type: SET_DEFAULT_TIME,
	payload,
});
export const addDefaultTimeAction = (payload) => ({
	type: ADD_DEFAULT_TIME,
	payload,
});
export const deleteDefaultTimeAction = (payload) => ({
	type: DELETE_DEFAULT_TIME,
	payload,
});

export const addLittlePauseAction = (payload) => ({
	type: ADD_LITTLE_PAUSE_TIME,
	payload,
});
export const deleteLittlePauseAction = (payload) => ({
	type: DELETE_LITTLE_PAUSE_TIME,
	payload,
});
export const resetLittlePauseTimeAction = (payload) => ({
	type: RESET_LITTLE_PAUSE_TIME,
	payload,
});
export const setLittlePauseTimeAction = (payload) => ({
	type: SET_LITTLE_PAUSE_TIME,
	payload,
});

export const addLargePauseAction = (payload) => ({
	type: ADD_LARGE_PAUSE_TIME,
	payload,
});
export const deleteLargePauseAction = (payload) => ({
	type: DELETE_LARGE_PAUSE_TIME,
	payload,
});
export const resetLargePauseTimeAction = (payload) => ({
	type: RESET_LARGE_PAUSE_TIME,
	payload,
});
export const setLargePauseTimeAction = (payload) => ({
	type: SET_LARGE_PAUSE_TIME,
	payload,
});

export const resetAllTimerAction = (payload) => ({
	type: ALL_TIMER_RESET,
	payload,
});
