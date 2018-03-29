require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const home = require('./routes/home')
const search = require('./routes/search')
const PORT = process.env.PORT || 5000

app.use(cors({ credentials: true }))
app.use(bodyParser.json())

home(app)
search(app)

app.listen(PORT, () => console.log('API is UP!! on', PORT))
