import { find } from 'ramda'
import fetch from 'isomorphic-fetch'
import {
  SET_BARS,
  SET_BAR,
  SET_HOTELS,
  SET_HOTEL,
  SET_ACTIVITIES,
  SET_ACTIVITY,
  SET_ATTRACTIONS,
  SET_ATTRACTION,
  SET_RESTAURANTS,
  SET_RESTAURANT,
  SET_COURSES,
  SET_COURSE
} from '../constants'
const url = 'http://localhost:5000'
// const url =
// 'https://api.yelp.com/v3/businesses/search?location=charleston&limit=50'

export const getBars = async (dispatch, getState) => {
  const res = await fetch(`${url}/bars`)
  const results = await res.json()
  dispatch({ type: SET_BARS, payload: results })
}

export const getHotels = async (dispatch, getState) => {
  const res = await fetch(`${url}/hotels`)
  const results = await res.json()
  dispatch({ type: SET_HOTELS, payload: results })
}

export const getCourses = async (dispatch, getState) => {
  const res = await fetch(`${url}/courses`)
  const results = await res.json()
  dispatch({ type: SET_COURSES, payload: results })
}

export const getActivities = async (dispatch, getState) => {
  const res = await fetch(`${url}/bars`)
  const results = await res.json()
  dispatch({ type: SET_ACTIVITIES, payload: results })
}

export const getAttractions = async (dispatch, getState) => {
  const res = await fetch(`${url}/bars`)
  const results = await res.json()
  dispatch({ type: SET_ATTRACTIONS, payload: results })
}

export const getRestaurants = async (dispatch, getState) => {
  const res = await fetch(`${url}/restaurants`)
  const results = await res.json()
  dispatch({ type: SET_RESTAURANTS, payload: results })
}

export const filterResult = questions => async (dispatch, getState) => {
  const foundQuestion = find(q => q.questionKey === 'todo', questions)
  console.log('foundQuestion', foundQuestion)
  const todoAnswer = find(o => o.selected === true, 'options')
  console.log('todoAnswer', todoAnswer)
  if (todoAnswer === 'golf') fetch(`${url}/courses`)
  else if (todoAnswer === 'hotel') fetch(`${url}/hotels`)
  else if (todoAnswer === 'bar') fetch(`${url}/bars`)
  else if (todoAnswer === 'resturant') fetch(`${url}/restaurants`)
  else if (todoAnswer === 'attraction') fetch(`${url}/attractions`)
  else if (todoAnswer === 'active') fetch(`${url}/activities`)
}
