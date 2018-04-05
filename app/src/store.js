import { createStore, combineReducers, applyMiddleware } from 'redux'
import questions from './reducers/questions'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    questions
  }),
  applyMiddleware(thunk)
)

export default store
