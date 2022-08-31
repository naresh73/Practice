export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type : 'deposit',
            paylaod : amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}