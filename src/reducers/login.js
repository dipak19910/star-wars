import { SET_USER_INFO, SET_LOGGED_USER_INFO } from '../constants/login'
const initialState = {
  username: '',
  password: ''
}
export default function login (state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      let { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_LOGGED_USER_INFO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
