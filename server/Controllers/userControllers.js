

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