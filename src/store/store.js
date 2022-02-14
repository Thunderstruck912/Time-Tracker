import {createStore, combineReducers, applyMiddleware} from "redux";
import {timeReducer} from "./timeReducer";
import {statusTimerReducer} from "./timerStatus";
import {navBarReducer} from "./navBarReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {totalCountReducer} from "./totalCountReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	time: timeReducer,
	status: statusTimerReducer,
	navStatus: navBarReducer,
	totalCount: totalCountReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
