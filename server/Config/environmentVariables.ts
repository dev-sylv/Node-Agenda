import dotenv from "dotenv"

dotenv.config()

export const environmentVariables = {
    adminemail: process.env.SenderEmail as string,
    adminpassword: process.env.SenderPassword as string
}