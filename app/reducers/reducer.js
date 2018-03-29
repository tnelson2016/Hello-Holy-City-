import GET_RESULTS from '../constants'

export const results = (state = [], action) => {
  switch (action.type) {
    case GET_RESULTS:
      return action.payload
    default:
      return state
  }
}
