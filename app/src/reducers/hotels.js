import { SET_HOTELS, SET_HOTEL } from '../constants'

export const hotels = (state = [], action) => {
  switch (action.type) {
    case SET_HOTELS:
      return action.payload
    default:
      return state
  }
}

export const hotel = (state = {}, action) => {
  switch (action.type) {
    case SET_HOTEL:
      return action.payload
    default:
      return state
  }
}
