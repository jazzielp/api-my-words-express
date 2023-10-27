const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

// GET /users
router.get('/users', userController.getAllUsers)

// GET /users/:id
router.get('/users/:id', userController.getUserById)

// POST /users
router.post('/users', userController.createUser)

// PUT /users/:id
router.put('/users/:id', userController.updateUser)

// DELETE /users/:id
router.delete('/users/:id', userController.deleteUser)

module.exports = router
