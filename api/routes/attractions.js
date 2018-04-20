const { getAttractions, getAttraction } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/attractions', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getAttractions({
      include_docs: true,
      startkey: 'attractions_',
      endkey: 'attractions_\ufff0'
    })
      .then(attractions => res.send(attractions))
      .catch(err => console.log(err))
  })

  app.get('/attractions/:id', (req, res) => {
    getAttraction(req.params.id).then(attraction => res.send(attraction))
  })
}
