import { ADD, WITHDRAW, CLEAR } from "../action-types";

export default function AddMoney() {
    return {
        type: ADD
    }
}

export default function WithdrawMoney() {
    return {
        type: WITHDRAW
    }
}

export default function ClearMoney() {
    return {
        type: CLEAR
    }
}