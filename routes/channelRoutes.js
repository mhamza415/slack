const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  createChannel,
  getWorkSpaceChannel,
  registerUserInChannel,
} = require("../controllers/channelControllers/createChannel");

// @desc        create channel
// route        http://localhost:6090/api/user/createchannel
// method       post

router.route("/createchannel").post(protect, createChannel);

// @desc        create channel
// route        http://localhost:6090/api/user/getWorkSpaceChannel
// method       post

router.route("/getWorkSpaceChannel/:id").get(protect, getWorkSpaceChannel);

// @desc        register user in channel
// route        http://localhost:6090/api/user/getWorkSpaceChannel
// method       post

router.route("/channels/:channelId/users/:userId").post(registerUserInChannel);

module.exports = router;
