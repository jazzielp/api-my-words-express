const express = require('express')
const router = express.Router()

const routerApi = (app) => {
  app.use('/api', router)
}

module.exports = routerApi
