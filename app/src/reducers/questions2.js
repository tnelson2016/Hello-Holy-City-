import { GET_QUESTIONS } from '../constants'

const initialState = [
  {
    name: 'intro',
    question: 'What is your deal?',
    questionKey: 'deal',
    type: 'single',
    options: [
      {
        optionText: 'Im just Visiting!',
        selected: false,
        value: 'visiting'
      },
      {
        optionText: 'Im thinking about a move!',
        selected: false,
        value: 'move'
      }
    ]
