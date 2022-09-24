import { combineReducers } from "redux";
import BalanceReducer from "./reducers";

const rootReducer = combineReducers({
    count : BalanceReducer
});

export default rootReducer;