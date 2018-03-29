module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Welcome to Hello Holy City API!')
  })
}
