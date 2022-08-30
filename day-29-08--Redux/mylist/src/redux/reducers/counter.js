import { ADD_COUNT, RESET_COUNT } from "../action-types";

const initialState = {
    amount : 0,
    name : "wolf"
};

const counter = function (state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {
                amount : ++state.amount
            };
        
        case RESET_COUNT:
            return {
                amount : action.count
            };
    
        default:
            return state;
    }
};

export default counter;