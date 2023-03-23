const students = require('../models/studentModel');

//create student
const createStudent = async (req, res) => {
    const {id, name, attendanceStatus, classAttendnaceStatus, parentPhoneNumber} = req.body

    try {
        const student = await students.create({id, name, attendanceStatus, classAttendnaceStatus, parentPhoneNumber})
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//get list of students
const getStudents = async (req, res) => {
    const studentsList = await students.find({})
    return res.status(200).json(studentsList)
}
//get one student
const getStudent = async (req, res) => {
    const {id} = req.params
    const student = await students.findById(id)
    return res.status(200).json(student)
}

//tap to change attendance status
const attendanceStatusChange = async(req, res) => {
    const {id} = req.params
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'No student found'})
    // }

    const student = await students.findById(id)

    if(student.attendanceStatus === "Out") {
        const update = {attendanceStatus: "In"}
        const studentUpdate = await students.findByIdAndUpdate(id, update)
    }
    if(student.attendanceStatus === "In") {
        const update = {attendanceStatus: "Out"}
        const studentUpdate = await students.findByIdAndUpdate(id, update)
    }

}

//change class attendance status
const classAttendanceStatusChange = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No student found'})
    }

    const student = await students.findById(id)

    if(student.classAttendanceStatus === "Out") {
        const update = {classAttendanceStatus: "In"}
        const studentUpdate = await students.findByIdAndUpdate(id, update)
    }
    if(student.classAttendanceStatus === "In") {
        const update = {classAttendanceStatus: "Out"}
        const studentUpdate = await students.findByIdAndUpdate(id, update)
    }

}

module.exports = {
    createStudent, attendanceStatusChange, classAttendanceStatusChange, getStudents, getStudent
}