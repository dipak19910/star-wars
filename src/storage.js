import {parseJSON,stringifyJSON} from "./utils"
export function getItem(key) {
    let item = localStorage.getItem(key)
    return parseJSON(item)   
}
export function setItem(key,value){
    localStorage.setItem(key,stringifyJSON(value))
}
export function removeItem(key){
    localStorage.removeItem(key)
}