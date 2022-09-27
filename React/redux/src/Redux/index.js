import { combineReducers } from "redux";
import { reducers } from "./Reducers";

export const rootReducer = combineReducers({
    count: reducers
});