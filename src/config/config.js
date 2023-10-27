const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: '.production.env'
  })
} else {
  dotenv.config({
    path: '.development.env'
  })
}

const config = {
  apiPort: process.env.API_PORT
}

module.exports = config
