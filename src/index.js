const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const {attendanceStatusChange} = require('./controllers/attendanceController')
const studentRoutes = require('./routes/studentRoutes')
const classRoutes = require('./routes/classRoutes')
const smsRoutes = require('./routes/smsRoutes')

const qrCode = require('qrcode');

const app = express();

app.use(express.json());
app.use(cors());

const { PORT = 3002 } = process.env;
const Mongo_URI = "mongodb+srv://ManulifeUniversity:j0a5o59lIw9p7Fnx@mernapplearn.iztg1lo.mongodb.net/?retryWrites=true&w=majority"

app.get("/qr/generate", (req, res) => {
    qrCode.toFile("./src/qrCodes/qr-code.png", "/qr/read/:id", {
        errorCorrectionLevel: "H"
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("QR code saved!");
        }
    })
});

app.patch("/qr/read/:id", attendanceStatusChange)

app.use('/api/user', userRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/class', classRoutes)
app.use('/api/sms', smsRoutes);

mongoose.connect(Mongo_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 App listening on ${PORT} ....`);
        })
    })