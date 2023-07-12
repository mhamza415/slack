const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers/registerUser");
const { verifyOtp } = require("../controllers/userControllers/verifyOtp");
const loginUser = require("../controllers/userControllers/loginUser");
// @desc        create user 
// route        http://localhost:6090/api/user/register
// method       post

router.route("/register").post(registerUser);


// @desc        verify user
// route        http://localhost:6090/api/user/verifyotp
// method       post

router.route("/verifyotp").post(verifyOtp);

// @desc        login user 
// route        http://localhost:6090/api/user/login
// method       post
router.route("/login").post(loginUser);
module.exports = router;

