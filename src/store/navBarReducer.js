const defaultState = {
	settingStatus: null,
};
const NAV_SETTINGS_STATUS = "NAV_SETTINGS_STATUS";

export const navBarReducer = (state = defaultState, action) => {
	switch (action.type) {
		case NAV_SETTINGS_STATUS:
			return {...state, settingStatus: action.payload};
		default:
			return state;
	}
};

export const navSettingsStatus = (payload) => ({
	type: NAV_SETTINGS_STATUS,
	payload,
});
