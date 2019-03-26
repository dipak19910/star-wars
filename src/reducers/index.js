import { combineReducers } from 'redux'
import login from './login'
import starWars from './starWars'
export default combineReducers({
  login,
  starWars
})
