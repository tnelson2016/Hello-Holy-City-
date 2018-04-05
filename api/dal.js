const { allDocs, getDoc } = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getBars = options => allDocs(options || { include_docs: true })

const getBar = barId => getDoc(barId)

const dal = {
  getBars,
  getBar
}

module.exports = dal
