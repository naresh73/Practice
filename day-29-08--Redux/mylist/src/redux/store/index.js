import { legacy_createStore } from "redux";
import { rootReducer } from "..";

export default legacy_createStore(rootReducer)