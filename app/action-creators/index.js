import fetch from 'isomorphic-fetch'
import { GET_RESULTS } from '../constants'

const url =
  'https://api.yelp.com/v3/businesses/search?location=charleston&limit=50'

export const getBars = async (dispatch, getState) => {
  const res = await fetch(`${url}`)
  const results = await res.json()
  dispatch({ type: GET_BARS, payload: results })
}
