const pool = require('../config/database');

const createS = (data, callBack) => {
    pool.query(
        `insert into students(id, name, attendanceStatus, classAttendanceStatus, parentPhoneNumber)
            values(?,?,?,?,?)`,
        [
            data.id,
            data.name,
            data.attendanceStatus,
            data.classAttendanceStatus,
            data.parentNumber
        ],
        (error, results) => {
            if (error) {
                return callBack(error)
            } 
            return callBack(null, results)
        }
    )
}

const getStudent = (data, callBack) => {
    pool.query(
        `select id, name, attendanceStatus, classAttendanceStatus, parentPhoneNumber from students`,
        [],
        (error, results) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    )
}

const getByID = (data, callBack) => {
    pool.query(
        `select id, name, attendanceStatus, classAttendanceStatus, parentPhoneNumber from students where id = ?`,
        [id],
        (error, results) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, error)
        }
    )
}

const updateAttendance = (data, callBack) => {
    pool.query(
        `update student set attendanceStatus = ? where id = ?`,
        [data.attendanceStatus, data.id],
        (error, results) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    )
}

const updateClassAttendance = (data, callBack) => {
    pool.query(
        `update student set classAttendanceStatus = ? where id = ?`,
        [data.classAttendanceStatus, data.id],
        (error, results) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    )
}

const deleteStudentByID = (data, callBack) => {
    pool.query(
        `delete from student where id = ?`,
        [data.id],
        (error, results) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    )
}

module.exports = {
    createS, getStudent, getByID, updateAttendance, updateClassAttendance, deleteStudentByID
}