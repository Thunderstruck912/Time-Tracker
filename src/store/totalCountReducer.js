const defaultState = {
	totalCount: 0,
	defaultCount: 12,
	roundCount: 3,
};

const ADD_TOTAL_COUNT = "ADD_TOTAL_COUNT";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const SET_DEFAULT_COUNT = "SET_DEFAULT_COUNT";
const ADD_DEFAULT_COUNT = "ADD_DEFAULT_COUNT";
const REMOVE_DEFAULT_COUNT = "REMOVE_DEFAULT_COUNT";

const SET_ROUND_COUNT = "SET_ROUND_COUNT";
const ADD_ROUND_COUNT = "ADD_ROUND_COUNT";
const REMOVE_ROUND_COUNT = "REMOVE_ROUND_COUNT";

const ALL_COUNT_RESET = "ALL_COUNT_RESET";

export const totalCountReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TOTAL_COUNT:
			return {...state, totalCount: state.totalCount + action.payload};
		case SET_TOTAL_COUNT:
			return {...state, totalCount: action.payload};

		case SET_DEFAULT_COUNT:
			return {...state, defaultCount: action.payload};
		case ADD_DEFAULT_COUNT:
			return {...state, defaultCount: state.defaultCount + action.payload};
		case REMOVE_DEFAULT_COUNT:
			return {...state, defaultCount: state.defaultCount - action.payload};

		case SET_ROUND_COUNT:
			return {...state, roundCount: action.payload};
		case ADD_ROUND_COUNT:
			return {...state, roundCount: state.roundCount + action.payload};
		case REMOVE_ROUND_COUNT:
			return {...state, roundCount: state.roundCount - action.payload};

		case ALL_COUNT_RESET:
			return {
				...state,
				defaultCount: defaultState.defaultCount,
				roundCount: defaultState.roundCount,
			};

		default:
			return state;
	}
};

export const addTotalCountAction = (payload) => ({
	type: ADD_TOTAL_COUNT,
	payload,
});
export const setTotalCountAction = (payload) => ({
	type: SET_TOTAL_COUNT,
	payload,
});

export const setDefaultCountAction = (payload) => ({
	type: SET_DEFAULT_COUNT,
	payload,
});
export const addDefaultCountAction = (payload) => ({
	type: ADD_DEFAULT_COUNT,
	payload,
});
export const removeDefaultCountAction = (payload) => ({
	type: REMOVE_DEFAULT_COUNT,
	payload,
});

export const removeRoundAction = (payload) => ({
	type: REMOVE_ROUND_COUNT,
	payload,
});
export const addRoundAction = (payload) => ({type: ADD_ROUND_COUNT, payload});
export const setRoundAction = (payload) => ({type: SET_ROUND_COUNT, payload});

export const allCountResetAction = (payload) => ({
	type: ALL_COUNT_RESET,
	payload,
});
