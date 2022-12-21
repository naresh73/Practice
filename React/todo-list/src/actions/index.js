export const addItem = (data) => {
    return {
        type : "ADD",
        payload : {
            id : new Date().getTime(),
            data : data
        }
    }
}

export const deleteItem = (id) => {
    return {
        type : "DELETE",
        id : id
    }
}

export const clearList = () => {
    return {
        type : "CLEAR"
    }
}