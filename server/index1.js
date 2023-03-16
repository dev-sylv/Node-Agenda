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
    from: "sannifortune11@gmail.com",
    to: email,
    subject: "Welcome to Group 4 platform",
    text: ` Dear ${name}, Thank you for signing up for our site. We look forward to having you as a member! and enjoying certain priviledges`
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
    const sendEmailJob = await agenda.schedule('in 1 minute', 'send welcome email', {
      name: user.name,
      email: user.email
    });

    sendEmailJob.attrs.retryInterval = 10000; // retry every 10 seconds
    sendEmailJob.attrs.retryLimit = 5; // retry up to 5 times
    sendEmailJob.save();

    return res.status(200).send('User created successfully \n Welcome email scheduled to be sent');
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error.message
    });
  }
};

module.exports = WelcomeMail

// In Node Agenda, attrs is a property of a job object that represents the attributes or properties of the job. The attrs property is an object that contains various properties and values associated with the job, such as the job's name, data, priority, and repeat schedule.

// When you define a job using Node Agenda, you can set various attributes and properties for the job using the define() method. For example:

// In this example, we define a job called "send email" that will be executed 5 minutes after it's scheduled. If the email fails to send, we call the done() function with an error object indicating the failure. We then set the retryInterval property to 10 seconds, and the retryLimit property to 5, which means the job will be retried every 10 seconds up to a maximum of 5 times.

// With this configuration, if the job fails to send the email the first time, it will be retried every 10 seconds until it succeeds or the retry limit is reached. This allows you to ensure that the email eventually gets sent, even if there are temporary network or server issues.

// When using Agenda.js, you’re likely to use the following methods regularly:

// . agenda.every repeats a task at a specified interval — e.g., monthly, weekly, daily, etc.
// . agenda.schedule schedules a task to run once at a specific time
// . agenda.now schedules a task to run immediately