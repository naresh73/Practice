import { INCREMENT, DECREMENT, RESET } from "../action-types";

export const incrementCount = () => {
    return {
        type : INCREMENT
        // payload : currentCount + 1
    };
}

export const decrementCount = () => {
    return {
        type : DECREMENT
        // payload : currentCount - 1
    };
}

export const resetCount = () => {
    return {
        type : RESET
    }
}
// export const resetCount = (currentCount) => {
//     return {
//         type : RESET,
//         payload : currentCount + 1
//     };
// }
