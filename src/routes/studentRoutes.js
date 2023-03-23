const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const {createStudent, attendanceStatusChange, classAttendanceStatusChange, getStudents, getStudent} = require('../controllers/attendanceController')

router.get('/students', getStudents)

router.get('/student/:id', getStudent)

router.patch('/classAttendanceStatus/:id', classAttendanceStatusChange)

router.post('/', createStudent)