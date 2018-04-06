import { SET_BARS, SET_BAR } from '../constants'

export const bars = (state = [], action) => {
  switch (action.type) {
    case SET_BARS:
      return action.payload
    default:
      return state
  }
}

export const bar = (state = {}, action) => {
  switch (action.type) {
    case SET_BAR:
      return action.payload
    default:
      return state
  }
}
