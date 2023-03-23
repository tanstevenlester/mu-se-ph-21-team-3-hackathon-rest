const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const {createUser, deleteUser} = require('../controllers/userControllers')

router.post('/', createUser)
router.delete('/:id', deleteUser)