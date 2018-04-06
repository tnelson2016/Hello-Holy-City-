import { SET_ATTRACTIONS, SET_ATTRACTION } from '../constants'

export const attractions = (state = [], action) => {
  switch (action.type) {
    case SET_ATTRACTIONS:
      return action.payload
    default:
      return state
  }
}

export const attraction = (state = {}, action) => {
  switch (action.type) {
    case SET_ATTRACTION:
      return action.payload
    default:
      return state
  }
}
