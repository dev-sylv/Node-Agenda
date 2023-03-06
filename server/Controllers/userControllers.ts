import { Job } from "agenda";
import { Request, Response } from "express";

import { agenda } from "../Config/db";
import { environmentVariables } from "../Config/environmentVariables";

import nodemailer from "nodemailer"

import userModels from "../Models/usermodels";


// Welcome mail for all users:
export function WelcomeMail(Job, done){

 const SendWelcomeMail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: environmentVariables.adminemail,
        pass: environmentVariables.adminpassword
    }
});

let recipentEmail = "recipient@gmail.com"

// Create an email message:
const MailMessage = {
    from: "nicsylvia15f@gmail.com",
    to: "adimikesylvia@gmail.com",
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

done();
}


// Register a user and send them welcome emails:
export const UserRegistration = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { name, email, password } = req.body;

            const user = await userModels.create({
                name,
                email,
                password
            })

            agenda.define("Send welcome email", function(job, done){
                WelcomeMail(job.attrs.data, done);
            })

            agenda.schedule("in 2 minutes", "Send welcome email", { user: user})

            return res.status(200).json({
                message: "User registered successfully",
                data: user
            })
        
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}