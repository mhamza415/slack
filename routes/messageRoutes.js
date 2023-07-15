const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const updateMessage = require("../controllers/messages")

// @desc        create channel
// route        http://localhost:6090/api/channel/createchannel
// method       post
// you need to add the token for hitting this route
router.route("/send").post(protect, () => { });

// @desc        getting the workspace channels
// route        http://localhost:6090/api/channel/getWorkSpaceChannel
// method       post
// you need to add the token for hitting this route

router.route("/get").get(protect, () => { });

// @desc        register user in channel
// route        http://localhost:6090/api/message/update
// method       post
// you need to add the token for hitting this route

router.route("/update/:id").post(protect, updateMessage);

// @desc        remove user from channel
// route        http://localhost:6090/api/message/delete
// method       post
// you need to add the token for hitting this route

router.route("/delete").delete(protect, () => { });

module.exports = router;
