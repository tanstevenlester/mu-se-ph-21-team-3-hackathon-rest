const {
    TWILIO_ACCOUNT_SID = "",
    TWILIO_AUTH_TOKEN = ""
} = process.env;

const client = require('twilio')(accountSid, authToken);

const sendSMS = async (req, res) => {
    client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15017122661',
        to: '+15558675310'
     })
    .then(message => console.log(message.sid));
};

module.exports = { sendSMS }