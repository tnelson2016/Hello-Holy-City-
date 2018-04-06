import { SET_ANSWER } from '../constants'

export const bars = (state = [], action) => {
  switch (action.type) {
    case SET_ANSWER:
      return action.payload
    default:
      return state
  }
}
