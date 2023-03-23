const express = require('express');
const router = express.Router();
const {createUser, deleteUser} = require('../controllers/userControllers')

router.post('/', createUser)
router.delete('/:id', deleteUser)

module.exports = router