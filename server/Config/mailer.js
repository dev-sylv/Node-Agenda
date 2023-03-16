// const nodemailer = require("nodemailer")

// const transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     port: 587,
//     secureConnection: false,
//     tls: {
//       ciphers: "SSLv3",
//     },
  
//     auth: {
//       user: "mypitchvest@outlook.com",
//       pass: "PitchvestWin1",
//     },
//   });

//   module.exports = transporter

const nodemailer = require('nodemailer');
const sendinblueTransport = require('nodemailer-sendinblue-transport');

const transporter = nodemailer.createTransport( new sendinblueTransport({
  apiKey: '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',
}));


module.exports = transporter