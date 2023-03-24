const {create, getClasses, getByID, deleteClassByID} = require('../services/classService')

const createClass = (req, res) => {
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

const getAClass = (req, res) => {
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

const getAllClasses = (req, res) => {
    getClasses((err, results) => {
        if(err) {
            return;
        }
        return res.status(200).json(results)
    })
}

const deleteClass = (req, res) => {
    const {id} = req.params

    deleteClassByID(id, (err, results) => {
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
    createClass, getAClass, getAllClasses, deleteClass
}