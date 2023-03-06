import { Job } from "agenda";
import { Request, Response } from "express";

import { agenda } from "../Config/db";

import userModels from "../Models/usermodels";

// Register a user and send them welcome emails:
export const UserRegistration = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { name, email, password } = req.body;

            const user = await userModels.create({
                name,
                email,
                password
            })
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