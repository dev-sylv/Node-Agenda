import express from "express"
import { UserRegistration } from "../Controllers/userControllers";

const router = express.Router();

router.route("/register").post(UserRegistration)

export default router