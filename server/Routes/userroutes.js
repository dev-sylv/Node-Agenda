// import express from "express"
// import {  WelcomeMail } from "../Controllers/userControllers";
const express = require("express");
const WelcomeMail = require("../index1");
// const WelcomeMail = require("../Controllers/userControllers")

const router = express.Router();

// router.route("/register").post(WelcomeMail)

router.route("/testing").post(WelcomeMail)

module.exports = router