const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers/registerUser")
const loginUser = require("../controllers/userControllers/loginUser");
// @desc        create user 
// route        http://localhost:6090/api/user/register
// method       post

router.route("/register").post(registerUser);

// @desc        create user 
// route        http://localhost:6090/api/user/login
// method       post
router.route("/login").post(loginUser);
module.exports = router;