import nodemailer from "nodemailer"

// Create a transporter
export const SendWelcomeMail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'your_gmail_account@gmail.com',
        pass: 'your_gmail_password'
    }
});

// Create an email message:
const MailMessage = {
    from: "nicsylvia15f@gmail.com",
    to: "recipient@gmail.com",
    subject: "Welcome to my platform",
    text: 'Thank you for signing up for our site. We look forward to having you as a member!'
};

// Send the mail:
SendWelcomeMail.sendMail(MailMessage, function(error, info){
    if (error) {
        console.log(error)
    } else {
        console.log("Emil sent to: " + info.response)
    }
})