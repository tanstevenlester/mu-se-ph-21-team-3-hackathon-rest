const {deleteByID, create, getByID} = require('../services/userService')

const createuser = (req, res) => {
    const {body} = req.body
    create(body, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
        }
        return res.status(200).json(results)
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params

    deleteByID(id, (err, results) => {
        if(err) {
            return;
        }
        if(!results) {
            return res.status(400).json({message: "No User Found"})
        }
        return res.status(200).json({message: "Deleted!"})
    })
}

const getAUser = (req, res) => {
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

module.exports = {
    createuser, deleteUser, getAUser
}