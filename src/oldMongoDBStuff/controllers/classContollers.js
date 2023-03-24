const Class = require('../models/classModel')
const mongoose = require('mongoose');

//create a Class

const createClass = async (req, res) => {
    const {id, className, students} = req.body

    try {
        const classroom = await Class.create({id, className})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//add a student to a class
const addStudent = async (req, res) => {
    const {id, className, students} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No class found'})
    }

    const Classdata = await Class.findById(id)
    const baseList = Classdata.students
    const update = {students: [...baseList,req.body.students]}

    const classroom = await Class.findOneAndUpdate(id, update)
    return res.status(200).json(classroom)
}

//remove a student from a class
const removeStudent = async (req, res) => {
    const {id, className, students} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No class found'})
    }

    const Classdata = await Class.findById(id)
    const baseList = Classdata.students
    const toDelete = req.body.students
    const update = {students: Classdata.filter(data => data.name !== toDelete.name)}

    const classroom = await Class.findOneAndUpdate(id, update)
    return res.status(200).json(classroom)
}

//delete a class
const deleteClass = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No class found'})
    }

    const toDelete = await Class.findByIdAndDelete(id)

}

const getClasses = async (req, res) => {
    const studentsList = await Class.find({})
    return res.status(200).json(studentsList)
}

const getClass = async (req, res) => {
    const {id} = req.params
    const student = await Class.findById(id)
    return res.status(200).json(student)
}

module.exports = {
    createClass,  addStudent, removeStudent, deleteClass, getClass, getClasses
}