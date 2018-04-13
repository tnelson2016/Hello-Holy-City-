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
// ;('https://api.yelp.com/v3/businesses/search?location=charleston&limi t=50')

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

// need to pass history as second arg to this function
export const filterResult = (questions, history) => async (
  dispatch,
  getState
) => {
  const foundQuestion = find(q => q.questionKey === 'todo', questions)
  console.log('foundQuestion.options', foundQuestion.options)
  const todoAnswer = find(o => o.selected === true, foundQuestion.options)
  console.log('todoAnswer', todoAnswer)

  if (todoAnswer.value === 'golf') {
    const golfCourses = await fetch(`${url}/courses`).then(res => res.json())
    dispatch({ type: SET_COURSES, payload: golfCourses })
    history.push('/results/golf')
  } else if (todoAnswer === 'hotel') {
    const hotels = await fetch(`${url}/hotels`).then(res => res.json())
    dispatch({ type: SET_HOTELS, payload: hotels })
    history.push('/results/hotel')
  } else if (todoAnswer === 'bar') {
    const bars = await fetch(`${url}/bars`).then(res => res.json())
    dispatch({ type: SET_BARS, payload: bars })
    history.push('results/hotel')
  } else if (todoAnswer === 'resturant') {
    const restaurants = await fetch(`${url}/restaurants`).then(res =>
      res.json()
    )
    dispatch({ type: SET_RESTAURANTS, payload: restaurants })
    history.push('results/restaurant')
  } else if (todoAnswer === 'attraction') {
    const attractions = await fetch(`${url}/attractions`).then(res =>
      res.json()
    )
    dispatch({ type: SET_ATTRACTIONS, payload: attractions })
    history.push('results/attraction')
  } else if (todoAnswer === 'active') {
    const activities = await fetch(`${url}/activities`).then(res => res.json)
    dispatch({ type: SET_ACTIVITIES, payload: activities })
    history.push('results/activities')
  }
}
