const mongoose = require('mongoose');
const Schema = mongoose.Schema

const classSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    className: String,
    students:[{
        name: String,
        classAttendanceStatus: String,
    }],
}, {timestamps: true})

module.exports = mongoose.model('Class', classSchema)