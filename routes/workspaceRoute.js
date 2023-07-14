const express = require("express");
const router = express.Router();
const {
  createWorkspace,
  editWorkspace,
} = require("../controllers/workspace/workspace");
const {saveWorkSpaceOfUser} = require("../controllers/workspace/workspace_user");
const {protect}=require('./../middlewares/authMiddleware')

// @desc        create workspace
// route        http://localhost:6090/api/workspace/create
// required
//      body        w_name,
//      header      token
// method       post
router.route("/create").post(protect,saveWorkSpaceOfUser);
// router.route("/create").post(createWorkspace);

// @desc        edit workspace
// route        http://localhost:6090/api/workspace/edit
// required
//      body        name,workspaceId
// method       post

router.route("/edit").post(protect,editWorkspace);

module.exports = router;
