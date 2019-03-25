import {SET_USER_INFO} from "../constants/login"
const initialState={
    username:'',
    password:''
}
export default function login(state =initialState, action) {
    debugger
    switch (action.type) {
      case SET_USER_INFO:
      let {key,value}=action.payload
      return {...state,[key]:value}
      default:
        return state
    }
  }