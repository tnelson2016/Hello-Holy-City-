import { SET_ACTIVITIES, SET_ACTIVITY } from '../constants'

export const activities = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.payload
    default:
      return state
  }
}

export const activity = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVITY:
      return action.payload
    default:
      return state
  }
}
