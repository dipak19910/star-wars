import axios from 'axios'
import { SERVER_URL } from '../configuration'
import { getItem } from '../storage'
let timeStart
let count = 0
export function get (url, params = {}, callback) {
  let user = getItem('user')
  if (user && user.name !== 'Luke Skywalker' && url !== 'people') {
    count++

    if (!timeStart) {
      timeStart = new Date()
    }
    if (diff_minutes(new Date(), timeStart) < 10 && count > 5) {
      alert('do not fetch more than 5 query.')
      return new Promise(resolve => {
        resolve({
          data: { results: [], data: {} }
        })
      })
    } else if (diff_minutes(new Date(), timeStart) > 10) {
      timeStart = void 0
      count = 0
    }
  }
  params = {
    ...params,
    format: 'json'
  }
  return axios
    .get(SERVER_URL + url, {
      params
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      throw error
    })
}

export function post () {}
export function put () {}

function diff_minutes (dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= 60
  return Math.abs(Math.round(diff))
}
