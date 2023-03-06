import Agenda, { JobPriority } from "agenda"
import nodemailer from "nodemailer"
import express, { Application} from "express"

const port = 2000

const agenda = new Agenda({
  db: {
    address: 'mongodb://localhost/agenda',
    collection: 'jobs',
  },
});

async function start() {
  await agenda.start();

  agenda.define('send welcome email', { priority: JobPriority.high }, async (job: any) => {
    const { email, name } = job.attrs.data;
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    const info = await transporter.sendMail({
      from: 'your-email@example.com',
      to: email,
      subject: 'Welcome to My Platform',
      text: `Hi ${name}, welcome to our platform!`,
    });

    console.log(`Sent welcome email to ${email}: ${info.messageId}`);
  });

  // Schedule a welcome email to be sent one minute from now
  agenda.schedule('in 1 minute', 'send welcome email', {
    email: 'user@example.com',
    name: 'John',
  });
}

start();

const app: Application = express();

app.listen(port, ()=>{
    console.log("Server created")
})