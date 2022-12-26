import { LOGIN, LOGOUT } from "../actions/action.types";

const initialState = {
    setLoggedIn : false
}

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.setLoggedIn = true ;
            
        case LOGOUT:
            return state.setLoggedIn = false ;
    
        default:
            return state
    }
}

