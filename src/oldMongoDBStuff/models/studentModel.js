const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: String,
    attendanceStatus: String,
    classAttendanceStatus: String,
    parentPhoneNumber: Number,
}, {timestamps: true})

module.exports = mongoose.model('Students', studentSchema)