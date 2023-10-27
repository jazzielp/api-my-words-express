const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: '.production.env'
  })
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: '.development.env'
  })
} else {
  dotenv.config({
    path: '.test.env'
  })
}

const config = {
  apiPort: process.env.API_PORT
}

module.exports = config
