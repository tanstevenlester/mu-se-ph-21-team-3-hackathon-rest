const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const {createStudent, attendanceStatusChange, classAttendanceStatusChange, getStudents, getStudent} = require('../controllers/attendanceController')

router.patch('/:id', attendanceStatusChange)


module.exports = router