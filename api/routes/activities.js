const { getActivities, getActivity } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/activities', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getActivities({
      include_docs: true,
      startkey: 'activities_',
      endkey: 'activities_\ufff0'
    })
      .then(activities => res.send(activities))
      .catch(err => console.log(err))
  })

  app.get('/activities/:id', (req, res) => {
    getActivity(req.params.id).then(activity => res.send(activity))
  })
}
