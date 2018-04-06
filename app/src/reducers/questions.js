import { GET_QUESTIONS } from '../constants'

const initialState = [
  {
    name: 'intro',
    questions: [
      {
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
        question: 'What is your deal',
        questionKey: 'deal',
        type: 'single'
      }
    ]
  },
  {
    name: 'categeory',
    questions: [
      {
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
        question: 'What do you want to do while you are in town',
        questionKey: 'todo',
        type: 'single'
      }
    ]
  },
  {
    name: 'bar',
    questions: [
      {
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
        question: 'What is your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'bar',
    questions: [
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
        ]
      },
      {
        question: 'What ambience do you prefer?',
        questionKey: 'bartype',
        type: 'multi'
      }
    ]
  },
  {
    name: 'bar',
    questions: [
      {
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
        question: 'What part of town?',
        type: 'single'
      }
    ]
  },

  {
    name: 'bar',
    questions: [
      {
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
        question: 'Do you need a pet-friendly hotel?',
        questionKey: 'pet',
        type: 'single'
      }
    ]
  },

  {
    name: 'beach',
    questions: [
      {
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
        question: 'What is your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'beach',
    questions: [
      {
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
        question: 'Do you want to surf',
        questionKey: 'beachtype',
        type: 'single'
      }
    ]
  },
  {
    name: 'beach',
    questions: [
      {
        options: [
          {
            optionText: 'Family Environment',
            selected: false,
            value: 'family environment'
          },
          {
            optionText: 'Laid back environment for adults',
            selected: false,
            value: 'Laid back'
          }
        ]
      },
      {
        question: 'How would you like to enjoy your beach experience',
        questionKey: 'beachtype',
        type: 'single'
      }
    ]
  },
  {
    name: 'bar',
    questions: [
      {
        options: [
          {
            optionText: 'IOP',
            selected: false,
            value: 'beach'
          },
          {
            optionText: 'Folly',
            selected: false,
            value: 'beach'
          },
          {
            optionText: 'Sullivans',
            selected: false,
            value: 'beach'
          }
        ]
      },
      {
        question: 'Are facilities available i.e. porter johns, beach showers? ',
        questionKey: 'beachtype',
        type: 'single'
      }
    ]
  },

  {
    name: 'hotels',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'hotels',
    questions: [
      {
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
        question: 'Where do you want to crash?',
        questionKey: 'stay',
        type: 'single'
      }
    ]
  },
  {
    name: 'hotels',
    questions: [
      {
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
        question: 'Do you want to bring pets?',
        questionKey: 'pets',
        type: 'single'
      }
    ]
  },
  {
    name: 'hotels',
    questions: [
      {
        options: [
          {
            optionText: 'Yes',
            selected: false,
            value: 'yes'
          },
          {
            optionText: 'No',
            selected: false,
            value: 'folly'
          }
        ]
      },
      {
        question: 'Do you need parking included?',
        questionKey: 'parking',
        type: 'single'
      }
    ]
  },
  {
    name: 'hotels',
    questions: [
      {
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
        question: 'Do you need wi-fi?',
        questionKey: 'wi-fi',
        type: 'single'
      }
    ]
  },
  {
    name: 'hotels',
    questions: [
      {
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
        question: 'What type of hotel are you looking for?',
        questionKey: 'hoteltype',
        type: 'multiple'
      }
    ]
  },

  {
    name: 'restaurants',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'restaurants',
    questions: [
      {
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
        question: 'What ciy would you like to dine in?',
        questionKey: 'restaurants',
        type: 'single'
      }
    ]
  },
  {
    name: 'restaruants',
    questions: [
      {
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
        question: 'What type of grub are you looking for?',
        questionKey: 'stay',
        type: 'single'
      }
    ]
  },
  {
    name: 'Golf',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'Golf',
    questions: [
      {
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
        question: 'Do you want use of a cart',
        questionKey: 'cart',
        type: 'single'
      }
    ]
  },
  {
    name: 'Golf',
    questions: [
      {
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
        question: 'What part of town do you want to golf',
        questionKey: 'town',
        type: 'single'
      }
    ]
  },
  {
    name: 'Golf',
    questions: [
      {
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
        question: 'Would you like the course to have a locker room',
        questionKey: 'town',
        type: 'single'
      }
    ]
  },

  {
    name: 'Get on the Water',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },

  {
    name: 'Get on the water',
    questions: [
      {
        options: [
          {
            optionText: 'Leisure Fun',
            selected: false,
            value: 'leisure'
          },
          {
            optionText: 'Booze Cruise',
            selected: false,
            value: 'cruise'
          },
          {
            optionText: 'Wake Board',
            selected: false,
            value: 'wake'
          },
          {
            optionText: 'Jet Ski',
            selected: false,
            value: 'ski'
          },
          {
            optionText: 'Paddle Board',
            selected: false,
            value: 'paddle'
          },
          {
            optionText: 'Sail',
            selected: false,
            value: 'sail'
          },
          {
            optionText: 'Tubing',
            selected: false,
            value: 'tubing'
          }
        ]
      },
      {
        question: 'What do you want to do on the water',
        questionKey: 'wateractivities',
        type: 'multiple'
      }
    ]
  },

  {
    name: 'Get on the water',
    questions: [
      {
        options: [
          {
            optionText: '1',
            selected: false,
            value: 1
          },
          {
            optionText: '2',
            selected: false,
            value: 2
          },
          {
            optionText: '3',
            selected: false,
            value: 3
          },
          {
            optionText: '4',
            selected: false,
            value: 4
          },
          {
            optionText: '5+',
            selected: false,
            value: 5
          }
        ]
      },
      {
        question: 'How many people are tagging along',
        questionKey: 'people',
        type: 'single'
      }
    ]
  },
  {
    name: 'Get on the water',
    questions: [
      {
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
        question: 'Do you want a boat and/ or driver',
        questionKey: 'boat',
        type: 'single'
      }
    ]
  },

  {
    name: 'Get on the water',
    questions: [
      {
        options: [
          {
            optionText: 'Wappo Cut Boat Ramp',
            selected: false,
            value: 'wappo'
          },
          {
            optionText: 'Plymouth Landing',
            selected: false,
            value: 'plymouth'
          },
          {
            optionText: 'Public Boat Landing',
            selected: false,
            value: 'public'
          },
          {
            optionText: 'Shem Creek Docks',
            selected: false,
            value: 'shem'
          }
        ]
      },
      {
        question: 'Where do you want to be picked up?',
        questionKey: 'pickup',
        type: 'single'
      }
    ]
  },

  {
    name: 'Get Active',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },

  {
    name: 'Get Active',
    questions: [
      {
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
        question: 'Do you want to be indoor, outdoor or both?',
        questionKey: 'sweaty',
        type: 'single'
      }
    ]
  },
  {
    name: 'Get Active',
    questions: [
      {
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
        question: 'How do you want to get sweaty?',
        questionKey: 'sweaty',
        type: 'single'
      }
    ]
  },
  {
    name: 'Get Active',
    questions: [
      {
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
        question: 'Where do you want to burn those calories',
        questionKey: 'burn',
        type: 'single'
      }
    ]
  },

  {
    name: 'Events',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'Events',
    questions: [
      {
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
        question: 'What town do you want to attend the event?',
        questionKey: 'event',
        type: 'single'
      }
    ]
  },
  {
    name: 'Events',
    questions: [
      {
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
          },
          {
            optionText: 'Doesnt Matter',
            selected: false,
            value: 'doesnt matter'
          }
        ]
      },
      {
        question: 'Do you prefer Indooor, Outdoor or Dont matter',
        questionKey: 'prefer',
        type: 'single'
      }
    ]
  },
  {
    name: 'Event',
    questions: [
      {
        options: [
          {
            optionText: 'Music',
            selected: false,
            value: 'music'
          },
          {
            optionText: 'Comedy',
            selected: false,
            value: 'comedy'
          },
          {
            optionText: 'Foodie',
            selected: false,
            value: 'foodie'
          },
          {
            optionText: 'Sporting (watch)',
            selected: false,
            value: 'sporting'
          },
          {
            optionText: 'Festivals',
            selected: false,
            value: 'festivals'
          }
        ]
      },
      {
        question: 'What type of event are you wanting to attend?',
        questionKey: 'event',
        type: 'multi'
      }
    ]
  },
  {
    name: 'Tourists Attraction',
    questions: [
      {
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
        question: 'Whats your budget?',
        questionKey: 'budget',
        type: 'single'
      }
    ]
  },
  {
    name: 'Tourists Attractions',
    questions: [
      {
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
        question: 'What part of town do you want to explore?',
        questionKey: 'event',
        type: 'single'
      }
    ]
  },
  {
    name: 'Events',
    questions: [
      {
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
        question: 'What town do you want to attend the event?',
        questionKey: 'event',
        type: 'single'
      }
    ]
  },
  {
    name: 'Tourists Attraction',
    questions: [
      {
        options: [
          {
            optionText: 'History',
            selected: false,
            value: 'history'
          },
          {
            optionText: 'Sights',
            selected: false,
            value: 'sights'
          },
          {
            optionText: 'Art',
            selected: false,
            value: 'art'
          },
          {
            optionText: 'Nature',
            selected: false,
            value: 'nature'
          }
        ]
      },
      {
        question: 'What do you want to take in?',
        questionKey: 'take',
        type: 'multi'
      }
    ]
  }
]

const questions = (state = initialState, action) => state

export default questions