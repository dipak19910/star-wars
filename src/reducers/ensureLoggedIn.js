import {SET_LOGGED_IN_USER,REMOVE_LOGGED_IN_USER} from "../constants/ensureLoggedIn'"
const initialState={
    user:{},
}
export default function login(state =initialState, action) {
    switch (action.type) {
      case SET_LOGGED_IN_USER:
      return {...state,user}
      default:
        return state
    }
  }