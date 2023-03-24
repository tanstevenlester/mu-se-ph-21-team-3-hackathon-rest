const { createStudent, getAStudent, getStudents, studentAttendanceStatusChange, studentClassAttendanceStatusChange, deleteAStudent } = require('../controllers/studentControllers')
const router = require('express').Router();

router.post('/', createStudent);
router.get('/', getStudents)
router.get('/:id', getAStudent)
//router.patch('/ChangeAttendanceStatus/:id', studentAttendanceStatusChange)
router.patch('/ChangeClassStatus/:id', studentClassAttendanceStatusChange)
router.delete('/:id', deleteAStudent)

module.exports = router