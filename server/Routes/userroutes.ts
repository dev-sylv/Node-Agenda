import express from "express"
import { UserRegistration, WelcomeMail } from "../Controllers/userControllers";

const router = express.Router();

router.route("/register").post(WelcomeMail)

export default router