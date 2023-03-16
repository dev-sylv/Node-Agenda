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

// const sendinBlueTransport = require('nodemailer-sendinblue-transport');
// const nodemailer = require('nodemailer');

// // Set up a nodemailer transporter using the sendinblue transport
// const transporter = nodemailer.createTransport( new sendinBlueTransport({
//   apiKey: 'xsmtpsib-2a6df43bd8ef8a0b1735125feadcb5302944b82e09e51d315621d98701780e9c-rMZAO8B5hwIqNYa4',
// }));


// module.exports = transporter


const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secureConnection: false,
  tls: {
    ciphers: "SSLv3",
  },

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transporter;
