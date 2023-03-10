const {agenda} = require('./Config/db');
const sendinBlueTransport = require('nodemailer-sendinblue-transport');
const nodemailer = require('nodemailer');

// Set up a nodemailer transporter using the sendinblue transport
const transporter = nodemailer.createTransport( new sendinBlueTransport({
  apiKey: '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',
}));

const userModels = require("./Models/usermodels"); // import your user model

// Define the job that sends the welcome email
agenda.define('send welcome email', async job => {
  const { name, email } = job.attrs.data;

  // Create an email message:
  const mailMessage = {
    from: "nicsylvia15f@gmail.com",
    to: email,
    subject: "Welcome to Sylvia platform",
    text: `${name}, Thank you for signing up for our site. We look forward to having you as a member!`
  };

  // Send the email:
  await transporter.sendMail(mailMessage);
});

// Start the agenda scheduler
(async function() {
  await agenda.start();
  console.log('Agenda scheduler started');
})();

// Welcome mail for all users:
const WelcomeMail = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user
    const user = await userModels.create({
      name,
      email,
      password
    });

    // Schedule a job to send the welcome email in 1 minute
    await agenda.schedule('in 5 minute', 'send welcome email', {
      name: user.name,
      email: user.email
    });

    return res.status(200).send('Welcome email scheduled to be sent');
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error.message
    });
  }
};

module.exports = WelcomeMail