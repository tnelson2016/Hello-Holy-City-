import { SINGLE_CHOICE_QUESTION_ANSWERED } from '../constants'
import { initialState } from './question-data'
import { find, map, merge } from 'ramda'

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_CHOICE_QUESTION_ANSWERED:
      //{
      //   type: SINGLE_CHOICE_QUESTION_ANSWERED,
      //   payload: { questiongroupname, questionkey, value }
      // }

      const foundQuestion = find(
        q =>
          q.questiongroupname === action.payload.currentgroupname &&
          q.questionKey === action.payload.currentquestionKey,
        state
      )
      console.log(
        'reducer foundQuestion',
        foundQuestion,
        'the selected value is',
        action.payload.value
      )

      const mappedOptions = map(
        o =>
          o.value === action.payload.value ? merge(o, { selected: true }) : o,
        foundQuestion.options
      )
      console.log('mappedOptions ', mappedOptions)

      const updatedQuestion = merge(foundQuestion, { options: mappedOptions })

      return map(
        q =>
          q.questiongroupname === action.payload.currentgroupname &&
          q.questionKey === action.payload.currentquestionKey
            ? updatedQuestion
            : q,
        state
      )

    default:
      return state
  }
}

export default questions
