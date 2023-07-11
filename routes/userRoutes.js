const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginController,
} = require("../controllers/userControllers/registerUser");

// @desc        create user
// route        http://localhost:6090/api/user/register
// method       post

router.route("/register").post(registerUser);
router.route("/login").post(loginController);

module.exports = router;
