import { INCREMENT, DECREMENT, RESET } from "../action-types"

const initialState = {
    count : 0,
    name : "naresh",
    data : []
 };

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, 
                count : state.count + 1,
                data : state.data.concat(state.count, ",")
            }
            
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1,
                data : state.data.concat(state.count, ",")
            }

            case RESET:
                return {
                    ...state,
                    count : initialState.count,
                    data : initialState.data
                }   
    
        default:
            return state;
    }
}  

export default countReducer;