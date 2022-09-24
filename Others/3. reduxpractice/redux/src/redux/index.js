import { combineReducers } from "redux";
import countReducer from "./reducers";

const rootReducer = combineReducers({
    count: countReducer
});

export default rootReducer;