const { getBars, getBar } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/bars', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getBars({
      include_docs: true,
      startkey: 'bars_',
      endkey: 'bars_\ufff0'
    })
      .then(bars => res.send(bars))
      .catch(err => console.log(err))
  })

  app.get('/bars/:id', (req, res) => {
    getBar(req.params.id).then(bar => res.send(bar))
  })
}
