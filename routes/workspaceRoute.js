const express = require("express");
const router = express.Router();
const {
  createWorkspace,
  editWorkspace,
} = require("../controllers/workspace/workspace");

const {saveWorkSpaceOfUser} = require("../controllers/workspace/workspace_user");
const {addMembersInWorkspace} = require("../controllers/workspace/addMember");
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


// @desc        edit workspace
// route        http://localhost:6090/api/workspace/addMember
// required
//      body        u_ids,w_id
// method       post
router.route("/addMember").post(protect,addMembersInWorkspace);


module.exports = router;
