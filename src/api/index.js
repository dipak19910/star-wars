import axios from "axios";

const SERVER_URL= "https://swapi.co/api/"
export function get (url,params={},callback){
    params={
        ...params,
        format:'json'
    }
    console.log('params>>',params)
   return axios.get(SERVER_URL+url, {
        params
      })
      .then(function (response) {
       return response
      })
      .catch(function (error) {
        throw error
      });
}

export function post (){
    
}
export function put (){
    
}