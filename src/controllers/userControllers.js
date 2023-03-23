const Users = require('../models/classModel')
const mongoose = require('mongoose');

//create a user

const createUser = async (req, res) => {
    const {id, name, userType, username, password} = req.body

    try {
        const classroom = await Users.create({id, name, userType, username, password})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params

    const toDelete = await Users.findByIdAndDelete(id)
}

module.exports = {
    createUser, deleteUser
}