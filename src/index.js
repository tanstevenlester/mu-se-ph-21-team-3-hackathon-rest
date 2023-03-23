const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const mysql = require('mysql');
const userRoutes = require('./routes/userRoutes')
//const {attendanceStatusChange} = require('./controllers/attendanceController')
const studentRoutes = require('./routes/studentRoutes')
const classRoutes = require('./routes/classRoutes')
const qrRoutes = require('./routes/qrRoutes')

const qrCode = require('qrcode');

const app = express();

const { PORT = 3002 } = process.env;

app.use(express.json());
app.use(cors());


app.get("/api/qr/generate/:id", (req, res) => {
    const { id } = req.params;

    qrCode.toFile(`./src/qrCodes/qr-code-${id}.png`, `/api/qr/read/${id}`, {
        errorCorrectionLevel: "H"
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("QR code saved!");
        }
    })
});

app.use("/api/qr/read/", qrRoutes);

app.use('/api/user', userRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/class', classRoutes);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123"
});

con.connect((err) => {
    if (err) {
        console.log(err);
    }

    app.listen(PORT, () => {
        console.log(`🚀 App listening on ${PORT} ....`);
    });
});