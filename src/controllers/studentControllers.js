const {createS, updateAttendance, updateClassAttendance, deleteStudentByID, getByID, getStudent} = require('../services/studentService');

 const createStudent = (req, res) => {
    const {body} = req.body
    createS(body, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
        }
        return res.status(200).json(results)
    })
}

const getAStudent = (req, res) => {
    const {id} = req.params
    getByID(id, (err, results) => {
        if (err) {
            return;
        }
        if(!results) {
            return res.status(400).json({error: "No Student Found"})
        }
        return res.status(200).json(results)
    })
}

const getStudents = (req, res) => {
    getStudent((err, results) => {
        if(err) {
            return;
        }
        return res.status(200).json(results)
    })
}

const studentAttendanceStatusChange = (req, res) => {
    const {id} = req.params

    const student = getByID(id, (err, results) => {
        if (err) {
            return;
        }
        if(!results) {
            return res.status(400).json({error: "No Student Found"})
        }
        return results
    })

    if(student.attendanceStatus === "Out") {
        const body = {
            id: id,
            attendanceStatus: "In"
        }

        updateAttendance(body, (err, results) => {
            if (err) {
                return;
            }
            return res.status(200).json({message: "Updated!"})
        })
    }

    if(student.attendanceStatus === "In") {
        const body = {
            id: id,
            attendanceStatus: "Out"
        }

        updateAttendance(body, (err, results) => {
            if (err) {
                return;
            }
            return res.status(200).json({message: "Updated!"})
        })
    }


}

const studentClassAttendanceStatusChange = (req, res) => {
    const {id} = req.params
    const {classAttendanceStatus} = req.body

    const student = getByID(id, (err, results) => {
        if (err) {
            return;
        }
        if(!results) {
            return res.status(400).json({error: "No Student Found"})
        }
        return results
    })

    const update = {
        id: id,
        classAttendanceStatus: classAttendanceStatus
    }

    updateClassAttendance(update, (err, results) => {
        if(err) {
            return;
        }
        return res.status(200).json({message: "Updated!"})
    })

    // if(student.classAttendanceStatus === "Out") {
    //     const body = {
    //         id: id,
    //         classAttendanceStatus: "In"
    //     }

    //     updateClassAttendance(body, (err, results) => {
    //         if (err) {
    //             return;
    //         }
    //         return res.status(200).json({message: "Updated!"})
    //     })
    // }

    // if(student.classAttendanceStatus === "In") {
    //     const body = {
    //         id: id,
    //         classAttendanceStatus: "Out"
    //     }

    //     updateClassAttendance(body, (err, results) => {
    //         if (err) {
    //             return;
    //         }
    //         return res.status(200).json({message: "Updated!"})
    //     })
    // }


}

const deleteAStudent = (req, res) => {
    const {id} = req.params

    deleteStudentByID(id, (err, results) => {
        if(err) {
            return;
        }
        if(!results) {
            return res.status(400).json({message: "No Student Found"})
        }
        return res.status(200).json({message: "Detelted!"})
    })
}


module.exports = {
    createStudent, getStudents, getAStudent, studentAttendanceStatusChange, studentClassAttendanceStatusChange, deleteAStudent
}