const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
//const {attendanceStatusChange} = require('./controllers/attendanceController')
const studentRoutes = require('./routes/studentRoutes')
const classRoutes = require('./routes/classRoutes')
const qrRoutes = require('./routes/qrRoutes')

const qrCode = require('qrcode');

const app = express();

app.use(express.json());
app.use(cors());


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

app.use("/qr/read/", qrRoutes)

app.use('/api/user', userRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/class', classRoutes)

//const Mongo_URI = "mongodb+srv://ManulifeUniversity:ManulifeUniversity2023@mernapplearn.iztg1lo.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(Mongo_URI)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`🚀 App listening on ${PORT} ....`)});
//     })

app.listen(PORT, () => {
    console.log(`🚀 App listening on ${PORT} ....`)});