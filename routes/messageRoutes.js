const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  sendMessage,
} = require("./../controllers/messages/save_message_controller");

// @desc        create channel
// route        http://localhost:6090/api/message/send
// method       post
// you need to add the token for hitting this route
router.route("/send").post(protect, sendMessage);

// @desc        getting the workspace channels
// route        http://localhost:6090/api/channel/getWorkSpaceChannel
// method       post
// you need to add the token for hitting this route

router.route("/get").get(protect, () => {});

// @desc        register user in channel
// route        http://localhost:6090/api/channel/registerUserInChannel
// method       post
// you need to add the token for hitting this route

router.route("/update").post(protect, () => {});

// @desc        remove user from channel
// route        http://localhost:6090/api/channel/removeuserchannel
// method       post
// you need to add the token for hitting this route

router.route("/delete").delete(protect, () => {});

module.exports = router;
