

const transporter = require("../Config/mailer")

const userModels = require("../Models/usermodels")


// Welcome mail for all users:
const  WelcomeEMail = async(req, res) =>{
 try {

    const { name, email, password } = req.body;

    const Findemail = await userModels.findOne({email});

    if (Findemail) {
        res.status(409).json({
            message: "User with email already exists",
        })
    }else{
        const user = await userModels.create({
            name,
            email,
            password
        })

        const token = crypto.randomBytes(16).toString("hex");

        const VerificationLink = `http://localhost:4000/api/user/${user._id}/verify/${token}`;

        const EmailMessage = {
            from : "sannifortune11@gmail.com",
            to: email,
            subject : "Email Verification from Real estate Plateform",
            html: `
            <p>Hello, ${name}</p>
        <p>Confirm your account by clicking the link below</p>
        <p><a href=${VerificationLink}>Click here to continue</a></p>
        <p>You are receiving this mail because you signed up on our platform, <b>Real estate Plateform</b>. Ignore this message if you did not take this action.</p>
        `
        }

        return res.status(201).json({
            message: "Successfully created User",
            data: user
        })
    }
   
    
   
 } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error.message
        })
 }
}

module.exports = WelcomeEMail

// Register a user and send them welcome emails: