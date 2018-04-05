const { getBar } = require('../dal')
const fetch = require('isomorphic-fetch')
const { pathOr, map, pick } = require('ramda')
const url =
  'https://api.yelp.com/v3/businesses/search?location={Charleston,west ashley, mount pleasant,sullivans island, james island, Folly}&categories=tours&limit=50'

module.exports = app => {
  app.get('/search', (req, res) => {
    const searchCriteria = pathOr('charleston', ['query', 'location'], req)
    fetch(`${url}`, {
      headers: {
        Authorization: `Bearer ${process.env.APIKEY}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(bars =>
        res.send(
          map(
            pick([
              'name',
              'rating',
              'price',
              'location',
              'url',
              'categories',
              'display_phone',
              'image_url'
            ]),
            bars.businesses
          )
        )
      )
      .catch(err => console.log('Error searchig Yelp', err))
  })

  app.get('/search/:id', (req, res) => {
    getBar(req.params.id).then(bar => res.send(bar))
  })
}
