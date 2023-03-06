const Agenda = require('agenda');
const nodemailer = require('nodemailer');

const agenda = new Agenda({
  db: {
    address: 'mongodb://localhost/agenda',
    collection: 'jobs',
  },
});

async function sendWelcomeEmail(email, name) {
  const job = await agenda.now('send welcome email', { email, name });
  console.log(`Scheduled welcome email to be sent to ${email} (${job.attrs._id})`);
}

sendWelcomeEmail("adimikesylvia@gmail.com", "Sylvia")

module.exports = { sendWelcomeEmail };
