const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

const {
  sendMessage,
} = require("./../controllers/messages/save_message_controller");

const { deleteMessage } = require("../controllers/messages/deleteMessages");
const updateMessage = require("../controllers/messages/updateMessage");

// @desc        create channel
// route        http://localhost:6090/api/message/send
// method       post
// you need to add the token for hitting this route
// body 
//      to                |--> user id to send that user        
//      message           |--> message that want to send
router.route("/send").post(protect, sendMessage);

// @desc        getting the workspace channels
// route        http://localhost:6090/api/channel/getWorkSpaceChannel
// method       post
// you need to add the token for hitting this route

router.route("/get").get(protect, () => {});

// @desc        register user in channel
// route        http://localhost:6090/api/message/update/:m_id
// method       post
// you need to add the token for hitting this route
// params       m_id              |--> that want to update
// body         message           |--> new message for update

router.route("/update/:m_id").post(protect, updateMessage);

// @desc        remove user from channel
// route        http://localhost:6090/api/message/delete/:m_id
// method       post
// you need to add the token for hitting this route
// params       m_id  |--> that want to delete
//

router.route("/delete/:m_id").delete(protect, deleteMessage);

module.exports = router;
