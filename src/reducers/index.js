import { combineReducers } from 'redux'
import login from "./login"
import starWars from "./starWars"
import ensureUser from "./ensureLoggedIn"
export default  combineReducers({
    login,
    starWars,
    ensureUser
})