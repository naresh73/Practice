import { ADD, WITHDRAW, CLEAR } from "../action-types";

function initialBalance() {
    return {
        balance : 0
    }
}

const BalanceReducer = (state = initialBalance, actions) => {
        switch (actions.types) {
            case ADD:
                return {
                    ...state,
                    balance: state.balance + 500
                }

            case WITHDRAW:
                return {
                    ...state,
                    balance : state.balance - 500
                }
                
            case CLEAR:
                return {
                    ...state,
                    balance : 0
                }

            default:
                return state
                
        }
    }


export default BalanceReducer;