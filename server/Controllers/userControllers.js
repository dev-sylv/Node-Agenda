// import { Job } from "agenda";
// import { Request, Response } from "express";

// import { agenda } from "../Config/db";

// import { transporter } from "../Config/mailer";

const transporter = require("../Config/mailer")

// import { environmentVariables } from "../Config/environmentVariables";

// import nodemailer from "nodemailer"

const nodemailer = require("nodemailer")

// import userModels from "../Models/usermodels";

const userModels = require("../Models/usermodels")


// Welcome mail for all users:
const  WelcomeMail = async(req, res) =>{

 try {

    const { name, email, password } = req.body;

    // Creating a transporter for our email
    const user = await userModels.create({
        name,
        email,
        password
    })
    
    // Create an email message:
    const MailMessage = {
        from: "nicsylvia15f@gmail.com",
        to: email,
        subject: "Welcome to my platform",
        text: `${user.name},Thank you for signing up for our site. We look forward to having you as a member!`
    };
    
    // Send the mail:
    await transporter.sendMail(MailMessage, function(error, info){
        if (error) {
            console.log("")
            console.log(error);
            res.status(500).json({
                message: error.message,
              });
          } else {
            console.log('Email sent: ' + info);
            // return res.status(200).json({
            //     message: "User registered successfully, Email sent successfully",
            //     data: user
            // })
            return res.status(200).send('Email sent successfully');
        }
    })
 } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error.message
        })
 }



}

module.exports = WelcomeMail
// Register a user and send them welcome emails: