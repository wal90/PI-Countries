import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATED';
export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'

export const getCountries = () =>{
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}


export function postActivity(payload){
     let response =  axios.post("http://localhost:3001/activity", payload)
    
}

export const orderByName = (payload) =>{
  return {
    type: ORDER_BY_NAME,
    payload
  }
}

export const orderByPopulation = (payload) =>{
  return{
    type: ORDER_BY_POPULATION,
    payload
  }
}

export const filterByContinent = (payload) =>{
  return{
    type: FILTER_BY_CONTINENTS,
    payload
  }
}

export const filterByActivity = (payload) =>{
  return {
    type: FILTER_BY_ACTIVITY,
    payload
  }
}

export function getActivities(payload){
  return async function (dispatch){
    try {
      var all = await axios.get("http://localhost:3001/activities")
      return dispatch({
        type:GET_ACTIVITIES,
        payload: all.data
      })
    } catch (error) {
      throw error
    }
  }
}


export function getDetail(id){
  return async function (dispatch){
      try {
         var jsonId = await axios.get("http://localhost:3001/countries/" + id.toUpperCase())
         return dispatch({
          type: GET_DETAILS,
          payload: jsonId.data
         })
      } catch (error) {
          throw error
      }
  }
}

export function getByName(name){
  return async function(dispatch){
    try {
      var jsonName= await axios.get("http://localhost:3001/countries?name=" + name)
      return dispatch({
        type:GET_COUNTRY_BY_NAME,
        payload: jsonName.data
      })
    } catch (error) {
      throw error
    }
  }
}








