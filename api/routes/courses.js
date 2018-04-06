const { getCourses, getCourse } = require('../dal')
const pkGen = require('../lib/pkGen')
const { pathOr } = require('ramda')

module.exports = app => {
  app.get('/courses', (req, res) => {
    // const limit = pathOr('charleston', ['query', 'limit'], req)
    // const startkey = pathOr(null, ['query', 'startkey'], req)

    getCourses({
      include_docs: true,
      startkey: 'courses_',
      endkey: 'courses_\ufff0'
    })
      .then(courses => res.send(courses))
      .catch(err => console.log(err))
  })

  app.get('/courses/:id', (req, res) => {
    getCourses(req.params.id).then(course => res.send(course))
  })
}
