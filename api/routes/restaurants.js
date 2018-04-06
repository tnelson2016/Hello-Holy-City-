const { getRestaurants, getRestaurant } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/restaurants', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getRestaurants({
      include_docs: true,
      startkey: 'restaurants_',
      endkey: 'restaurants_\ufff0'
    })
      .then(restaurants => res.send(restaurants))
      .catch(err => console.log(err))
  })

  app.get('/restaurants/:id', (req, res) => {
    getRestaurant(req.params.id).then(restaurant => res.send(restaurant))
  })
}
