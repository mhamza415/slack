const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers/registerUser");
const { verifyOtp } = require("../controllers/userControllers/verifyOtp");
// @desc        create user
// route        http://localhost:6090/api/user/register
// method       post

router.route("/register").post(registerUser);

// @desc        create user
// route        http://localhost:6090/api/user/verifyotp
// method       post

router.route("/verifyotp").post(verifyOtp);

module.exports = router;
