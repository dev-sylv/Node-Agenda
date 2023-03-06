import { Job } from "agenda";
import { Request, Response } from "express";

import { agenda } from "../Config/db";
import { environmentVariables } from "../Config/environmentVariables";

import nodemailer from "nodemailer"

import userModels from "../Models/usermodels";


// Welcome mail for all users:
export const  WelcomeMail = async(req: Request, res: Response) =>{

 try {

    const { name, email, password } = req.body;

    // Creating a transporter for our email
    const SendWelcomeMail = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: environmentVariables.adminemail,
            pass: environmentVariables.adminpassword
        }
    });
    
    const user = await userModels.create({
        name,
        email,
        password
    })
    
    // Create an email message:
    const MailMessage = {
        from: environmentVariables.adminemail,
        to: email,
        subject: "Welcome to my platform",
        text: `${user!.name},Thank you for signing up for our site. We look forward to having you as a member!`
    };
    
    // Send the mail:
    SendWelcomeMail.sendMail(MailMessage, function(error, info){
        if (error) {
            console.log("")
            console.log(error);
            res.status(500).send('Internal server error');
          } else {
            console.log('Email sent: ' + info.response);
            // return res.status(200).json({
            //     message: "User registered successfully, Email sent successfully",
            //     data: user
            // })
            res.status(200).send('Email sent successfully');
        }
    })
 } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
 }


}


// Register a user and send them welcome emails: