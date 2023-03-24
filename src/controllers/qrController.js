const qrCode = require('qrcode');
const qrCodeReader = require('qrcode-reader');
const jimp = require('jimp');
const fs = require('fs');
const smsController = require('./smsController');
const constants = require('../constants/constants');

const generateQR = async (req, res) => {
    try {
        const { id } = req.params;
        const outputPath = `./src/qrCodes/qr-code-${id}.png`;

        const base64Output = Buffer
            .from(outputPath, 'utf8')
            .toString('base64');

        qrCode.toFile(outputPath, base64Output, {
            errorCorrectionLevel: "H"
        }, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("QR code saved!");
            }
        });
    } catch (exception) {
        return res
            .status(500)
            .json({
                error: {
                    message: exception.message
                }
            });
    }
};

const readQR = async (req, res) => {
    try {
        const { data, isTapIn } = req.body;

        const bufferData = Buffer
            .from(data, 'base64')
            .toString('utf8');

        const buffer = fs.readFileSync(bufferData);

        jimp.read(buffer, (err, image) => {
            if (err) {
                console.error(err);
            }

            const qrCodeInstance = new qrCodeReader();

            qrCodeInstance.callback = (err, value) => {
                if (err) {
                    console.error(err);
                }

                if (value.result !== data) {
                    return res
                        .status(401)
                        .json({
                            error: {
                                message: "The QR Code data is not match with the encypted data stored."
                            }
                        });
                }
            }

            qrCodeInstance.decode(image.bitmap);
        });

        // code here the save to the db
        // use isTapIn also sa kung ano yung ise save sa db

        if (!isTapIn) {
            smsController.sendSMS(constants.TAP_OUT_NOTIFICATION, "+639176503827");
        } else {
            smsController.sendSMS(constants.TAP_IN_NOTIFICATION, "+639176503827");
        }        

        return res
            .status(200)
            .json({
                data: {
                    message: "Success!"
                }
            });
        
    } catch (exception) {
        return res
            .status(500)
            .json({
                error: {
                    message: exception.message
                }
            });
    }
};

module.exports = { generateQR, readQR }