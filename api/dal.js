const { allDocs, getDocs, findDocs } = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getBars = options => allDocs(options || { include_docs: true })
const getBar = barId => getDoc(barId)

const getRestaurants = options => allDocs(options || { include_docs: true })
const getRestaurant = restaurantId => getDoc(restaurantId)

const getHotels = options => allDocs(options || { include_docs: true })
const getHotel = hotelId => getDoc(hotelId)

const getCourses = options => allDocs(options || { include_docs: true })
const getCourse = courseId => getDoc(courseId)

const getActivities = options => allDocs(options || { include_docs: true })
const getActivity = activityId => getDoc(activityId)

const getAttractions = options => allDocs(options || { include_docs: true })
const getAttraction = attractionID => getDoc(attractionId)

const dal = {
  getBars,
  getBar,
  getRestaurants,
  getRestaurant,
  getHotels,
  getHotel,
  getCourses,
  getCourse,
  getActivities,
  getActivity,
  getAttraction,
  getAttractions
}

module.exports = dal
