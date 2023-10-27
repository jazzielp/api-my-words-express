const express = require('express')

const config = require('./config/config.js')
const app = express()
const port = config.apiPort

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my API!'
  })
})

const server = app.listen(port, () => {
  console.log('Server running on port ' + port)
})

module.exports = {
  app,
  server
}
