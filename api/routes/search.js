const { getBar } = require('../dal')
const fetch = require('isomorphic-fetch')
const { pathOr, map, pick } = require('ramda')
const url =
  'https://api.yelp.com/v3/businesses/search?location=charleston&categories=hotels&limit=50'
console.log('bearer token', `Bearer ${process.env.APIKEY}`)
module.exports = app => {
  app.get('/search', (req, res) => {
    const searchCriteria = pathOr('{}', ['query', 'categories'], req)
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
              'image_url',
              'radius'
            ]),
            bars.businesses
          )
        )
      )
      .catch(err => console.log('Error searching Yelp', err))
  })

  app.get('/search/:id', (req, res) => {
    getBar(req.params.id).then(bar => res.send(bar))
  })
}
