import { counterTypes } from "../Actions/ActionTypes";

const initialState = {
    counter: 0,
    username: "Naresh Sharma",
    email: "nareshsharma0318@gmail.com"
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case counterTypes.increment:
            return {
                ...state,
                counter: state.counter + 1
            }

        case counterTypes.decrement:
            return {
                ...state,
                counter: state.counter - 1
            }

        case counterTypes.reset:
            return {
                ...state,
                counter: 0,
                username: "Good",
                email: "Bye"
            }

        default:
return state
    }
}