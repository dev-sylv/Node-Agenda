import nodemailer from "nodemailer"

// Create a transporter
export const SendWelcomeMail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'nicsylvia15f@gmail.com',
        pass: ''
    }
});

// The createTransport method creates a transporter object that can be used to send emails. We pass in our email provider's details in the auth object.

// The sendMail method sends the email message defined in the message object. If the email is successfully sent, the info object will contain information about the sent email, including the message ID. If there's an error, the error object will contain information about the error.

let recipentEmail = "recipient@gmail.com"

// Create an email message:
const MailMessage = {
    from: "nicsylvia15f@gmail.com",
    to: recipentEmail,
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