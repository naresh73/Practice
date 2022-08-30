const {
    ADD_COUNT, RESET_COUNT, ADD_TODO, TOGGLE_TODO, CLEAR_TODO_LIST, DELETE_TODO
}
    = require("../action-types");

let count = 0;

export const add_count = function () {
    return {
        type : ADD_COUNT,
        count : ++count
    }
};

export const reset_count = function () {
    return {
        type : RESET_COUNT,
        count : 0
    }
};

export const add_todo = function (text) {
    return {
        type : ADD_TODO,
        text
    }
};

export const clear_todo_list = function () {
    return {
        type : CLEAR_TODO_LIST
    }
};

export const delete_todo = function (id) {
    return {
        type : DELETE_TODO,
        id
    }
};

export const toggle_todo = function (id) {
    return {
        type : TOGGLE_TODO,
        id
    }
};