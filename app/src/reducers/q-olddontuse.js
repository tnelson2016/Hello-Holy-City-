import { GET_QUESTIONS } from '../constants'

const qInitialState = [
  {
    name: 'bar',
    questions: [
      {
        options: [
          {
            optionText: '$25',
            selected: false,
            value: 25
          },
          {
            optionText: '$50',
            selected: false,
            value: 50
          },
          {
            optionText: '$75',
            selected: false,
            value: 75
          },
          {
            optionText: '$100',
            selected: false,
            value: 100
          },
          {
            optionText: '$200',
            selected: false,
            value: 200
          }
        ],
        question: 'What is your budget?',
        questionKey: 'budget',
        type: 'single'
      },
      {
        options: [
          {
            optionText: 'On the water',
            selected: false,
            value: 'water'
          },
          {
            optionText: 'Downtown',
            selected: false,
            value: 'downtown'
          },
          {
            optionText: 'Chill',
            selected: false,
            value: 'chill'
          },
          {
            optionText: 'Pub',
            selected: false,
            value: 'pub'
          },
          {
            optionText: 'Craft Beer',
            selected: false,
            value: 'craft'
          },
          {
            optionText: 'Dive Bar',
            selected: false,
            value: 'dive'
          },
          {
            optionText: 'Boutique Cocktails',
            selected: false,
            value: 'boutique'
          },
          {
            optionText: 'Secret Courtyard',
            selected: false,
            value: 'secret'
          },
          {
            optionText: 'Rooftop',
            selected: false,
            value: 'rooftop'
          }
        ],
        question: 'What ambience do you prefer?',
        questionKey: 'bartype',
        type: 'multi'
      },
      {
        options: [
          {
            optionText: 'Downtown',
            selected: false,
            value: 'downtown'
          },
          {
            optionText: 'Mt. P.',
            selected: false,
            value: 'Mt. P.'
          },
          {
            optionText: 'James Island',
            selected: false,
            value: 'james'
          },
          {
            optionText: 'Folly',
            selected: false,
            value: 'folly'
          }
        ],
        question: 'What part of town?',
        type: 'single'
      }
    ]
  },
  {
    name: 'beach',
    questions: [
      options: [
      {
        optionText: '$25',
        selected: false,
        value: 25
      },
      {
        optionText: '$50',
        selected: false,
        value: 50
      },
      {
        optionText: '$75',
        selected: false,
        value: 75
      },
      {
        optionText: '$100',
        selected: false,
        value: 100
      },
      {
        optionText: '$200',
        selected: false,
        value: 200
      }
      ],
      question: 'What is your budget?',
      questionKey: 'budget',
      type: 'single'

    },
  {
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes'
      },
      optionText: 'No',
      selected: false,
      value: 'no'
    }
  ],
  question: 'Do you want to surf',
  questionKey: 'beachtype'
  type: "single"
},
{
  options: [
    {
      optionText: 'Family Environment',
      selected:false,
      value: 'family environment'
    },
    optionText: 'Laid back environment for adults',
    selected:false,
    value: 'Laid back'
  }
],
question: 'How would you like to enjoy your beach experience',
questionKey: 'beachtype'
type: "single"
},
{
  options: [
    optionText: 'IOP'
    selected: false,
    value:'beach'
  },
  {
    optionText: 'Folly'
    selected: false,
    value:'beach'
  }
  optionText: 'Sullivans',
  selected: false,
  value:'beach'
}
],
question: 'Which beach has facilities available i.e. porter johns, beach showers? ',
questionKey: 'beachtype'
type: "single"
  ]



  {
    name: 'eat'
    questions:
  }
]







export const questions = (state = qInitialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.payload
    default:
      return state
  }
}
export default question
