let objectConstructor = {}.constructor;

export const isJSONObject=(value)=>{
    if(!value){
      return false
    }
    return value.constructor === objectConstructor
  }
export function  parseJSON(value) {
        try{
            return JSON.parse(value)
        }finally{
            return value
        }
}

export function  stringifyJSON(value) {
    if(isJSONObject(value)){
        return JSON.stringify(value)
    }
    return value
}