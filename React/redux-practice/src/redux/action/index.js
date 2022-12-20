import { INCREMENT, DECREMENT, RESET } from "../action-types";

export const incCount = () => {
    return {
        type: INCREMENT
    }
}

export const decCount = () => {
    return {
        type: DECREMENT
    }
}

export const resCount = () => {
    return {
        type : RESET
    }
}