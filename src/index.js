const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const classRoutes = require('./routes/classRoutes');
const qrRoutes = require('./routes/qrRoutes');

import students from './mockData'
// const { 
//     TWILIO_ACCOUNT_SID = "AC3841ee1fb3969ed4c5fc8c66e33fbc8f",
//     TWILIO_AUTH_TOKEN = "580fb113e4f055866f79f5e816de4bf9"
// } = process.env;

// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// $env:NODE_TLS_REJECT_UNAUTHORIZED="0"


// const { generateQR } = require("./controllers/qrController");

const app = express();

const { PORT = 3002 } = process.env;

app.use(express.json());
app.use(cors());


// app.get("/api/qr/generate/:id", generateQR);

app.post("/api/sms/send", (req, res) => {
    client.messages
        .create({
            body: 'Hello, Cohort 21 Team 3 Hackathon!',
            from: '+14066313871',
            to: '+639176503827'
        })
        .then(message => console.log(message.sid));
});

app.get('/students', (req, res) => {
    return res.status(200).json(students.students)
})

app.get('/students/:id', (req, res) => {
    const {id} = req.params

    const student = students.students.filter(student => student.id === id)
    return res.status(200).json(student)
})

console.log(students.students)

app.patch('/students/updateAttendace/:id', (req, res) => {
    const {id} = req.params

    const student = students.students.filter(student => student.id === id)

    if(student.attendanceStatus === "In") {
        attendanceStatusChange = "Out"
        student.attendanceStatus = attendanceStatusChange
        return res.status(200).json({message: "Updated!"})
    }

    if(student.attendanceStatus === "Out") {
        attendanceStatusChange = "In"
        student.attendanceStatus = attendanceStatusChange
        return res.status(200).json({message: "Updated!"})
    }
})

app.patch('/students/updateClassAttendace/:id', (req, res) => {
    const {id} = req.params
    const {body} = req.body

    const student = students.students.filter(student => student.id === id)
    student.ClassAttendanceStatus = body.classAttendanceStatus
    return res.status(200)
})

app.delete('/students/:id', (req, res) => {
    const {id} = req.params

    //const student = students.students.filter(student => student.id === id)
    const filteredStudents = students.students.filter(student => student.id !== id)
    return res.status(200)
})

app.get('/', (req, res) => {
    return res.send('Working')
})


// app.use("/api/qr", qrRoutes);

// app.use('/api/user', userRoutes);
// // app.use('/api/students', studentRoutes);
// app.use('/api/class', classRoutes);

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password123"
// });

// con.connect((err) => {
//     if (err) {
//         console.log(err);
//     }

    
// });

app.listen(PORT, () => {
    console.log(`🚀 App listening on ${PORT} ....`);
});