const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const classRoutes = require('./routes/classRoutes');
const qrRoutes = require('./routes/qrRoutes');
// const { 
//     TWILIO_ACCOUNT_SID = "AC3841ee1fb3969ed4c5fc8c66e33fbc8f",
//     TWILIO_AUTH_TOKEN = "580fb113e4f055866f79f5e816de4bf9"
// } = process.env;

// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// $env:NODE_TLS_REJECT_UNAUTHORIZED="0"


const { generateQR } = require("./controllers/qrController");

const app = express();

const { PORT = 3002 } = process.env;

app.use(express.json());
app.use(cors());


// app.get("/api/qr/generate/:id", generateQR);

// app.post("/api/sms/send", (req, res) => {
//     client.messages
//         .create({
//             body: 'Hello, Cohort 21 Team 3 Hackathon!',
//             from: '+14066313871',
//             to: '+639176503827'
//         })
//         .then(message => console.log(message.sid));
// });

app.use("/api/qr", qrRoutes);

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