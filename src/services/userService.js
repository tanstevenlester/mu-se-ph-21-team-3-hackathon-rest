const pool = require('../config/database');

const create = (data, callBack) => {
    pool.query(
        `insert into users(id, username, password)
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

const deleteByID = (data, callBack) => {
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
    deleteByID, create, getByID
}