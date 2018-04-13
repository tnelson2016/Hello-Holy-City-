export const initialState = [
  {
    questiongroupname: 'intro',
    question: 'What brings you to Charleston?',
    questionKey: 'deal',
    type: 'single',

    options: [
      {
        optionText: 'Im just Visiting!',
        selected: false,
        value: 'visiting',
        next: { questiongroupname: 'category', questionKey: 'todo' }
      },
      {
        optionText: 'Im thinking about a move! (Coming soon!)',
        selected: false,
        value: 'move',
        next: { questiongroupname: 'category', questionKey: 'welcome' }
      }
    ]
  },
  {
    questiongroupname: 'category',
    question: 'What do you want to do while you are in town?',
    questionKey: 'todo',
    type: 'single',
    options: [
      {
        optionText: 'find a hotel',
        selected: false,
        value: 'hotel',
        next: { questiongroupname: 'hotels', questionKey: 'budget' }
      },

      {
        optionText: 'find a restaurants',
        selected: false,
        value: 'restaurants',
        next: { questiongroupname: 'restaurants', questionKey: 'budget' }
      },
      {
        optionText: 'find a bar',
        selected: false,
        value: 'bars',
        next: { questiongroupname: 'bar', questionKey: 'budget' }
      },

      {
        optionText: 'Find Tourist Attractions',
        selected: false,
        value: 'attractions',
        next: { questiongroupname: 'attractions', questionKey: 'budget' }
      },
      {
        optionText: 'get active',
        selected: false,
        value: 'active',
        next: { questiongroupname: 'active', questionKey: 'budget' }
      },
      {
        optionText: 'play golf',
        selected: false,
        value: 'golf',
        next: { questiongroupname: 'golf', questionKey: 'budget' }
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
        value: '$',
        next: { questiongroupname: 'bar', questionKey: 'location' }
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$',
        next: { questiongroupname: 'bar', questionKey: 'location' }
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$',
        next: { questiongroupname: 'bar', questionKey: 'location' }
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$',
        next: { questiongroupname: 'bar', questionKey: 'location' }
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What part of town?',
    questionKey: 'location',
    type: 'single',
    options: [
      {
        optionText: 'Downtown',
        selected: false,
        value: 'downtown',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'Mt. Pleasant',
        selected: false,
        value: 'Mt. P.',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'Folly',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullivans',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iop',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'West ashley',
        next: { questiongroupname: 'bar', questionKey: 'ambience' }
      }
    ]
  },
  {
    questiongroupname: 'bar',
    question: 'What ambience do you prefer?',
    questionKey: 'ambience',
    type: 'single',
    options: [
      {
        optionText: 'On the water',
        selected: false,
        value: 'water',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },

      {
        optionText: 'Chill',
        selected: false,
        value: 'chill',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Pub',
        selected: false,
        value: 'pub',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Craft Beer',
        selected: false,
        value: 'craft',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Dive Bar',
        selected: false,
        value: 'dive',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Boutique Cocktails',
        selected: false,
        value: 'boutique',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Secret Courtyard',
        selected: false,
        value: 'secret',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'Rooftop',
        selected: false,
        value: 'rooftop',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      }
    ]
  },

  {
    questiongroupname: 'bar',
    question: 'Do want to take your dog to the bar?',
    questionKey: 'pet',
    isEnd: true,
    type: 'single',

    options: [
      {
        optionText: 'Yes!',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      },
      {
        optionText: 'No :(',
        selected: false,
        value: 'no',
        next: { questiongroupname: 'bar', questionKey: 'pet' }
      }
    ]
  },
  /**********************Return Bar Results***********************************/
  {
    questiongroupname: 'hotels',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '$',
        selected: false,
        value: '$',
        next: { questiongroupname: 'hotels', questionKey: 'stay' }
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$',
        next: { questiongroupname: 'hotels', questionKey: 'stay' }
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$',
        next: { questiongroupname: 'hotels', questionKey: 'stay' }
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$',
        next: { questiongroupname: 'hotels', questionKey: 'stay' }
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Where do you want stay?',
    questionKey: 'stay',
    type: 'single',
    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      },
      {
        optionText: 'Charleston',
        selected: false,
        value: 'Charleston',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      },
      {
        optionText: 'Folly',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'hotels', questionKey: 'pet' }
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Are you want to bringing pets?',
    questionKey: 'pet',
    type: 'single',
    options: [
      {
        optionText: 'Yes, I am',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'hotels', questionKey: 'wi-fi' }
      },
      {
        optionText: 'No, not this time',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'hotels', questionKey: 'wi-fi' }
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'Do you need wi-fi?',
    questionKey: 'wi-fi',
    isEnd: true,
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      },
      {
        optionText: 'No',
        selected: false,
        value: 'no',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      }
    ]
  },
  {
    questiongroupname: 'hotels',
    question: 'What type of hotel are you looking for?',
    questionKey: 'hoteltype',
    isEnd: true,
    type: 'single',
    options: [
      {
        optionText: 'family friendly ',
        selected: false,
        value: 'family',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      },
      {
        optionText: 'grownup getaway',
        selected: false,
        value: 'getaway',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      },
      {
        optionText: 'Free breakfast',
        selected: false,
        value: 'breakfast',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      },
      {
        optionText: 'Lobby bar',
        selected: false,
        value: 'Lobbybar',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      },
      {
        optionText: 'Concierge',
        selected: false,
        value: 'concierge',
        next: { questiongroupname: 'hotels', questionKey: 'hoteltype' }
      }
    ]
  },
  /********************Return Hotels Results**************/
  {
    questiongroupname: 'restaurants',
    question: 'Whats your budget?',
    questionKey: 'budget',
    type: 'single',

    options: [
      {
        optionText: '$',
        selected: false,
        value: '$',
        next: { questiongroupname: 'restaurants', questionKey: 'location' }
      },
      {
        optionText: '$$',
        selected: false,
        value: '$$',
        next: { questiongroupname: 'restaurants', questionKey: 'location' }
      },
      {
        optionText: '$$$',
        selected: false,
        value: '$$$',
        next: { questiongroupname: 'restaurants', questionKey: 'location' }
      },
      {
        optionText: '$$$$',
        selected: false,
        value: '$$$$',
        next: { questiongroupname: 'restaurants', questionKey: 'location' }
      }
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'Which city would you like to dine in?',
    questionKey: 'location',
    type: 'single',

    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      },
      {
        optionText: 'Folly',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'restaurants', questionKey: 'grub' }
      }
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'What type of meal are you looking for?',
    questionKey: 'grub',
    type: 'single',
    options: [
      {
        optionText: 'Bar Food',
        selected: false,
        value: 'bar',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      },
      {
        optionText: 'Seafood',
        selected: false,
        value: 'sea',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      },
      {
        optionText: 'Ethinic Food',
        selected: false,
        value: 'ethnic',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      },
      {
        optionText: 'BBQ',
        selected: false,
        value: 'bbq',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      },
      {
        optionText: 'High End',
        selected: false,
        value: 'high',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      }
    ]
  },
  {
    questiongroupname: 'restaurants',
    question: 'Would you like to make a reservation?',
    questionKey: 'reservations',
    isEnd: true,
    type: 'single',
    options: [
      {
        optionText: 'Yes, If they allow it',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      },
      {
        optionText: 'No, Ill just walk-in',
        selected: false,
        value: 'no',
        next: { questiongroupname: 'restaurants', questionKey: 'reservations' }
      }
    ]
  },
  {
    questiongroupname: 'golf',
    question: 'How exclusive do you want your golf experience?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '1',
        selected: false,
        value: '1',
        next: { questiongroupname: 'golf', questionKey: 'cart' }
      },
      {
        optionText: '2',
        selected: false,
        value: 2,
        next: { questiongroupname: 'golf', questionKey: 'cart' }
      },
      {
        optionText: '3',
        selected: false,
        value: '3',
        next: { questiongroupname: 'golf', questionKey: 'cart' }
      },
      {
        optionText: '4',
        selected: false,
        value: '4',
        next: { questiongroupname: 'golf', questionKey: 'cart' }
      },
      {
        optionText: '5',
        selected: false,
        value: '5',
        next: { questiongroupname: 'golf', questionKey: 'cart' }
      }
    ]
  },
  {
    questiongroupname: 'golf',
    question: 'Do you want use of a cart?',
    questionKey: 'cart',
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'golf', questionKey: 'location' }
      },
      {
        optionText: 'No',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'golf', questionKey: 'location' }
      }
    ]
  },
  {
    questiongroupname: 'golf',
    question: 'What part of town do you want to golf?',
    questionKey: 'location',
    type: 'single',
    options: [
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount pleasant',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'Charleston',
        selected: false,
        value: 'charleston',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iop',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james island',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'Kiawah Island',
        selected: false,
        value: 'kiawah island',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      }
    ]
  },
  {
    questiongroupname: 'golf',
    question: 'Would you like the course to have a locker room?',
    questionKey: 'lockers',
    isEnd: true,
    type: 'single',
    options: [
      {
        optionText: 'Yes',
        selected: false,
        value: 'yes',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      },
      {
        optionText: 'No',
        selected: false,
        value: 'no',
        next: { questiongroupname: 'golf', questionKey: 'lockers' }
      }
    ]
  },
  /*************Return Golf Results*********/

  {
    questiongroupname: 'active',
    question: 'On a scale of 1-5 how, active do you want to get?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '1',
        selected: false,
        value: '1',
        next: { questiongroupname: 'active', questionKey: 'facility' }
      },
      {
        optionText: '2',
        selected: false,
        value: '2',
        next: { questiongroupname: 'active', questionKey: 'facility' }
      },
      {
        optionText: '3',
        selected: false,
        value: '3',
        next: { questiongroupname: 'active', questionKey: 'facility' }
      },
      {
        optionText: '4',
        selected: false,
        value: '4',
        next: { questiongroupname: 'active', questionKey: 'facility' }
      },
      {
        optionText: '5',
        selected: false,
        value: '5',
        next: { questiongroupname: 'active', questionKey: 'facility' }
      }
    ]
  },
  {
    questiongroupname: 'active',
    question: 'Do you want to be indoor, outdoor or both?',
    questionKey: 'facility',
    type: 'single',
    options: [
      {
        optionText: 'Indoor',
        selected: false,
        value: 'indoor',
        next: { questiongroupname: 'active', questionKey: 'sweaty' }
      },
      {
        optionText: 'Outdoor',
        selected: false,
        value: 'outdoor',
        next: { questiongroupname: 'active', questionKey: 'sweaty' }
      },
      {
        optionText: 'Bit of Both',
        selected: false,
        value: 'both',
        next: { questiongroupname: 'active', questionKey: 'sweaty' }
      }
    ]
  },
  {
    questiongroupname: 'active',
    question: 'How do you want to get sweaty?',
    questionKey: 'sweaty',
    type: 'single',
    options: [
      {
        optionText: 'Gym',
        selected: false,
        value: 'gym',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'Parks',
        selected: false,
        value: 'yoga',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'Yoga',
        selected: false,
        value: 'yoga',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'Adventurous Activities',
        selected: false,
        value: 'adventure',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      }
    ]
  },
  {
    questiongroupname: 'active',
    question: 'Where do you want to burn those calories?',
    questionKey: 'burn',
    isEnd: true,
    type: 'single',

    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      },
      {
        optionText: 'Folly',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'active', questionKey: 'burn' }
      }
    ]
  },
  /*************Return Active Results**********/

  {
    questiongroupname: 'attractions',
    question: 'On scale of 1 to 5 what is your curiosity level?',
    questionKey: 'budget',
    type: 'single',
    options: [
      {
        optionText: '1',
        selected: false,
        value: '1',
        next: { questiongroupname: 'attractions', questionKey: 'location' }
      },
      {
        optionText: '2',
        selected: false,
        value: '2',
        next: { questiongroupname: 'attractions', questionKey: 'location' }
      },
      {
        optionText: '3',
        selected: false,
        value: '3',
        next: { questiongroupname: 'attractions', questionKey: 'location' }
      },
      {
        optionText: '4',
        selected: false,
        value: '4',
        next: { questiongroupname: 'attractions', questionKey: 'location' }
      },
      {
        optionText: '5',
        selected: false,
        value: '5',
        next: { questiongroupname: 'attractions', questionKey: 'location' }
      }
    ]
  },

  {
    questiongroupname: 'attractions',
    question: 'What part of town do you want to explore?',
    questionKey: 'location',
    type: 'single',
    options: [
      {
        optionText: 'Mount Pleasant',
        selected: false,
        value: 'mount p',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'IOP',
        selected: false,
        value: 'iOP',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'Sullivans',
        selected: false,
        value: 'sullys',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'West Ashley',
        selected: false,
        value: 'west ashley',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'James Island',
        selected: false,
        value: 'james',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'Folly',
        selected: false,
        value: 'folly',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      }
    ]
  },

  {
    questiongroupname: 'attractions',
    question: 'What would you like to explore?',
    questionKey: 'explore',
    isEnd: true,
    type: 'single',
    options: [
      {
        optionText: 'Historical Charleston',
        selected: false,
        value: 'historical charleston',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'Nature of Charleston',
        selected: false,
        value: 'nature',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'Tours',
        selected: false,
        value: 'Tours',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      },
      {
        optionText: 'Aquarium',
        selected: false,
        value: 'aquarium',
        next: { questiongroupname: 'attractions', questionKey: 'explore' }
      }
    ]
  },
  {
    questiongroupname: 'category',
    question:
      'Thanks for considering Charleston your next home! Here is a little help getting started.',
    questionKey: 'welcome',
    type: 'single',
    options: [
      {
        optionText: 'Search for employment (Under Construction)',
        selected: false,
        value: 'employment',
        next: { questiongroupname: 'category', questionKey: 'welcome' }
      },
      {
        optionText: 'Search for a realtor (Under Construction)',
        selected: false,
        value: 'realtor',
        next: { questiongroupname: 'category', questionKey: 'welcome' }
      },
      {
        optionText: 'Search Apartments (Under Construction',
        selected: false,
        value: 'apartment',
        next: { questiongroupname: 'category', questionKey: 'welcome' }
      }
    ]
  }
]
