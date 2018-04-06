import { SET_RESTAURANTS, SET_RESTAURANT } from '../constants'

export const restaurants = (state = [], action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.payload
    default:
      return state
  }
}

export const restaurant = (state = {}, action) => {
  switch (action.type) {
    case SET_RESTAURANT:
      return action.payload
    default:
      return state
  }
}
