const express = require('express')

const config = require('./config/config.js')
const app = express()
const port = config.apiPort

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, word'
  })
})

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
