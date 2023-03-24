const pool = require('../config/database');

const create = (data, callBack) => {
    pool.query(
        `insert into class(id, className)
            values(?,?)`,
        [
            data.id,
            data.className,
        ],
        (error, results) => {
            if (error) {
                return callBack(error)
            } 
            return callBack(null, results)
        }
    )
}

const getClasses = (data, callBack) => {
    pool.query(
        `select id, className from classes`,
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
        `select id, className from classes where id = ?`,
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

const deleteClassByID = (data, callBack) => {
    pool.query(
        `delete from classes where id = ?`,
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
    create, getClasses, getByID, updateAttendance, updateClassAttendance, deleteClassByID
}