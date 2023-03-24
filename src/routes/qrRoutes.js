const { studentAttendanceStatusChange } = require('../controllers/studentControllers')
const router = require('express').Router();

router.patch('/ChangeAttendanceStatus/:id', studentAttendanceStatusChange)

module.exports = router