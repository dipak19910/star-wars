import {REMOVE_LOGGED_IN_USER,SET_LOGGED_IN_USER} from "../constants/ensureLoggedIn";

export function  setLoggedInUser(payload) {
    return {
        type:SET_LOGGED_IN_USER,
        payload:payload
    }
}

export function  removeLoggedInUser(payload) {
    return {
        type:REMOVE_LOGGED_IN_USER,
        payload:payload
    }
}
