const express = require('express');
const router = express.Router();

const {createClass,  addStudent, removeStudent, deleteClass, getClass, getClasses} = require('../controllers/classContollers')

router.get('/', getClasses)

router.get('/:id', getClass)

router.patch('/removeStudent/:id', removeStudent)

router.post('/', createClass)

router.patch('/addStudentClass/:id', addStudent)

router.delete('/:id', deleteClass)

module.exports = router