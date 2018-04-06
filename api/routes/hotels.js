const { getHotels, getHotel } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/hotels', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getHotels({
      include_docs: true,
      startkey: 'hotels_',
      endkey: 'hotels_\ufff0'
    })
      .then(hotels => res.send(hotels))
      .catch(err => console.log(err))
  })

  app.get('/hotels/:id', (req, res) => {
    getHotel(req.params.id).then(hotel => res.send(hotel))
  })
}
