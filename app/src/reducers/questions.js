import { GET_QUESTIONS } from '../constants'

const initialState = [
  {
    questiongroupname: 'intro',
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
  },
  {
    questiongroupname: 'categeory',
    question: 'What do you want to do while you are in town?',
    questionKey: 'todo',
    type: 'single',
    options: [
      {
        optionText: 'bars',
        selected: false,
        value: 'bar'
      },

      {
        optionText: 'hotels',
        selected: false,
        value: 'hotels'
      },
      {
        optionText: 'attractions',
        selected: false,
        value: 'attractions'
      },

      {
        optionText: 'activities',
        selected: false,
        value: 'activities'
      },
      {
        optionText: 'restaurants',
        selected: false,
        value: 'restaurants'
      },
      {
        optionText: 'courses',
        selected: false,
        value: 'courses'
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What is your budget?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '$',
        selected: false,
        value: '$'
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$'
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$'
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$'
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What part of town?',
    type: 'single',
    options: [
      {
        optionText: 'Downtown',
        selected: false,
        value: 'downtown'
      },
      {
        optionText: 'Mt. Pleasant',
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
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullivans'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iop'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What ambience do you prefer?',
    questionKey: 'bartype',
    type: 'single',
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
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What part of town?',
    type: 'single',
    options: [
      {
        optionText: 'Downtown',
        selected: false,
        value: 'downtown'
      },
      {
        optionText: 'Mt. Pleasant',
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
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullivans'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iop'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'Do you need a pet-friendly bar?',
    questionKey: 'pet',
    type: 'single',

    options: [
      {
        optionText: 'Yes, pets are welcomed!',
        selected: false,
        value: 'yes'
      },
      {
        optionText: 'No Fur-babies allowed',
        selected: false,
        value: 'no'
      }
    ]
  },

  {
    questiongroupname: 'hotels',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '$',
        selected: false,
        value: '$'
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$'
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$'
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$'
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Where do you want to crash?',
    questionKey: 'stay',
    type: 'single',
    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP'
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
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
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Do you want to bring pets?',
    questionKey: 'pets',
    type: 'single',
    options: [
      {
        optionText: 'Yes, pets are welcomed!',
        selected: false,
        value: 'yes'
      },
      {
        optionText: 'No Fur-babies allowed',
        selected: false,
        value: 'folly'
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Do you need wi-fi?',
    questionKey: 'wi-fi',
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes'
      },
      {
        optionText: 'No',
        selected: false,
        value: 'no'
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'What type of hotel are you looking for?',
    questionKey: 'hoteltype',
    type: 'single',
    options: [
      {
        optionText: 'family friendly ',
        selected: false,
        value: 'family'
      },
      {
        optionText: 'grownup getaway',
        selected: false,
        value: 'getaway'
      },
      {
        optionText: 'Free breakfast',
        selected: false,
        value: 'breakfast'
      },
      {
        optionText: 'Lobby bar',
        selected: false,
        value: 'Lobbybar'
      },
      {
        optionText: 'Concierge',
        selected: false,
        value: 'concierge'
      }
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',

    options: [
      {
        optionText: '$',
        selected: false,
        value: '$'
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$'
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$'
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$'
      }
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'What ciy would you like to dine in?',
    questionKey: 'restaurants',
    type: 'single',

    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP'
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
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
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'What type of grub are you looking for?',
    questionKey: 'stay',
    type: 'single',
    options: [
      {
        optionText: 'Bar Food',
        selected: false,
        value: 'bar'
      },
      {
        optionText: 'Seafood',
        selected: false,
        value: 'sea'
      },
      {
        optionText: 'Ethinic Food',
        selected: false,
        value: 'ethnic'
      },
      {
        optionText: 'BBQ',
        selected: false,
        value: 'bbq'
      },
      {
        optionText: 'High End',
        selected: false,
        value: 'high'
      }
    ]
  },
  {
    questiongroupname: 'Golf',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '$',
        selected: false,
        value: '$'
      },
      {
        optionText: '$$',
        selected: false,
        value: 50
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$'
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$'
      }
    ]
  },
  {
    questiongroupname: 'Golf',
    question: 'Do you want use of a cart',
    questionKey: 'cart',
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes'
      },
      {
        optionText: 'No',
        selected: false,
        value: 'yes'
      }
    ]
  },
  {
    questiongroupname: 'Golf',
    question: 'What part of town do you want to golf',
    questionKey: 'town',
    type: 'single',
    options: [
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
      },
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount pleasant'
      },
      {
        optionText: 'Charleston',
        selected: false,
        value: 'charleston'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iop'
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james island'
      }
    ]
  },
  {
    questiongroupname: 'Golf',
    question: 'Would you like the course to have a locker room',
    questionKey: 'town',
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes'
      },
      {
        optionText: 'No',
        selected: false,
        value: 'no'
      }
    ]
  },

  {
    questiongroupname: 'Get Active',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '$',
        selected: false,
        value: '$'
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$'
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$'
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$'
      }
    ]
  },
  {
    questiongroupname: 'Get Active',
    question: 'Do you want to be indoor, outdoor or both?',
    questionKey: 'sweaty',
    type: 'single',
    options: [
      {
        optionText: 'Indoor',
        selected: false,
        value: 'indoor'
      },
      {
        optionText: 'Outdoor',
        selected: false,
        value: 'outdoor'
      },
      {
        optionText: 'Bit of Both',
        selected: false,
        value: 'both'
      }
    ]
  },
  {
    questiongroupname: 'Get Active',
    question: 'How do you want to get sweaty?',
    questionKey: 'sweaty',
    type: 'single',
    options: [
      {
        optionText: 'Gym',
        selected: false,
        value: 'gym'
      },
      {
        optionText: 'Parks',
        selected: false,
        value: 'yoga'
      },
      {
        optionText: 'Yoga',
        selected: false,
        value: 'yoga'
      },
      {
        optionText: 'Adventurous Activities',
        selected: false,
        value: 'adventure'
      },
      {
        optionText: 'Competition',
        selected: false,
        value: 'competition'
      }
    ]
  },
  {
    questiongroupname: 'Get Active',
    question: 'Where do you want to burn those calories',
    questionKey: 'burn',
    type: 'single',

    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP'
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
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
    ]
  },
  {
    questiongroupname: 'Tourists Attractions',
    question: 'What part of town do you want to explore?',
    questionKey: 'event',
    type: 'single',
    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p'
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP'
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys'
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley'
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
    ]
  }
]

const questions = (state = initialState, action) => state

export default questions
