const fetch = require('isomorphic-fetch')
const { pathOr, map, pick } = require('ramda')
const url =
  'https://api.yelp.com/v3/businesses/search?location=charleston&limit=50'

console.log('process.env.APIKEY', process.env.APIKEY)

module.exports = app => {
  app.get('/search', (req, res) => {
    console.log('url', url)
    fetch(`${url}`, {
      headers: {
        Authorization: `Bearer ${process.env.APIKEY}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(restaurants =>
        res.send(
          map(
            pick(['name', 'rating', 'price', 'location.address1', 'url']),
            restaurants.businesses
          )
        )
      )
      .catch(err => console.log('Error searchig Yelp', err))
  })
}
