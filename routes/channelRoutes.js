const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  createChannel,
  getWorkSpaceChannel,
  registerUserInChannel,
  removeUserFromChannel,
} = require("../controllers/channelControllers/createChannel");

// @desc        create channel
// route        http://localhost:6090/api/channel/createchannel
// method       post
// you need to add the token for hitting this route
router.route("/createchannel").post(protect, createChannel);

// @desc        getting the workspace channels
// route        http://localhost:6090/api/channel/getWorkSpaceChannel
// method       post
// you need to add the token for hitting this route

router.route("/getWorkSpaceChannel/:id").get(protect, getWorkSpaceChannel);

// @desc        register user in channel
// route        http://localhost:6090/api/channel/registerUserInChannel
// method       post
// you need to add the token for hitting this route

router.route("/registerUserInChannel").post(protect, registerUserInChannel);

// @desc        remove user from channel
// route        http://localhost:6090/api/channel/removeuserchannel
// method       post
// you need to add the token for hitting this route

router.route("/removechannel").delete(protect, removeUserFromChannel);

module.exports = router;
