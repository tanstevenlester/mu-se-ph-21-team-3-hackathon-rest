const { 
    TWILIO_ACCOUNT_SID = "AC3841ee1fb3969ed4c5fc8c66e33fbc8f",
    TWILIO_AUTH_TOKEN = "580fb113e4f055866f79f5e816de4bf9"
} = process.env;

const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendSMS = (message, recipient) => {
    try {
        twilio.messages
            .create({
                body: message,
                from: '+14066313871',
                to: recipient
            })
            .then(message => console.log(message.sid));
    } catch(exception) {
        throw exception;
    }
};

module.exports = { sendSMS };