const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  createChannel,
  getWorkSpaceChannel,
  registerUserInChannel,
  removeUserFromChannel,
} = require("../controllers/channelControllers/channelManager");

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

router.route("/registerUserInChannel").post(protect, registerUserInChannel);

// @desc        remove user from channel
// route        http://localhost:6090/api/user/removeuserchannel
// method       post

router.route("/removechannel").delete(protect, removeUserFromChannel);

module.exports = router;
