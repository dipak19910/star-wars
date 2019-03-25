import {VALIDATE_USER,SET_USER_INFO} from "../constants/login"
export function validateUser(payload){
    return {
        type:VALIDATE_USER,
        payload
    }
}

export function setUserInfos(event){
    return {
        type:SET_USER_INFO,
        payload:{
            key:event.target.id,
            value:event.target.value
        }
    }
}