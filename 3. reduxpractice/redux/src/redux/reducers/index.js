import { INCREMENT, DECREMENT, RESET } from "../action-types";

const initialState = {
    Name : "Naresh Sharma",
    count: 0,
};

const countReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return {
                ...state, 
                count: state.count + 1
            }


        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            }

        case RESET :
            return {
                ...state, 
                count: 0
            }

        default:
            return state
    }
}

export default countReducer;