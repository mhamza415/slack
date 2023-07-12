const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers/registerUser")

// @desc        create user 
// route        http://localhost:6090/api/user/register
// method       post

router.route("/register").post(registerUser);

module.exports = router;