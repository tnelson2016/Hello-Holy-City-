import { createStore, combineReducers, applyMiddleware } from 'redux'
import questions from './reducers/questions'
import { activities, activity } from './reducers/activities'

import { attractions, attraction } from './reducers/attractions'

import { courses, course } from './reducers/courses'

import { hotels, hotel } from './reducers/hotels'

import { restaurants, restaurant } from './reducers/restaurants'

import { bars, bar } from './reducers/bars'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    questions,
    activities,
    activity,
    attractions,
    attraction,
    bars,
    bar,
    courses,
    course,
    hotels,
    hotel,
    restaurants,
    restaurant
  }),
  applyMiddleware(thunk)
)

export default store
