import { SET_COURSES, SET_COURSE } from '../constants'

export const courses = (state = [], action) => {
  switch (action.type) {
    case SET_COURSES:
      return action.payload
    default:
      return state
  }
}

export const course = (state = {}, action) => {
  switch (action.type) {
    case SET_COURSE:
      return action.payload
    default:
      return state
  }
}
