const express = require("express");

const WelcomeEMail = require("../Controllers/userControllers");

// const WelcomeMail = require("../index1");

const router = express.Router();

router.route("/register").post(WelcomeEMail)

// router.route("/testing").post(WelcomeMail)

module.exports = router