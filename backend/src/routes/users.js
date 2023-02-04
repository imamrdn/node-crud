const express = require('express')
const UserController = require('../controllers/users')

const router = express.Router()

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createNewUser)
router.patch('/:id', UserController.updateUser)

module.exports = router