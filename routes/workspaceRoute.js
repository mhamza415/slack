const express = require("express");
const router = express.Router();
const {
  createWorkspace,
  editWorkspace,
} = require("../controllers/workspace/workspace");
const {saveWorkSpaceOfUser} = require("../controllers/workspace/workspace_user");

// @desc        create workspace
// route        http://localhost:6090/api/workspace/create
// required
//      params        w_name,u_id
// method       post
router.route("/create/:w_name/:u_id").post(saveWorkSpaceOfUser);
// router.route("/create").post(createWorkspace);

// @desc        edit workspace
// route        http://localhost:6090/api/workspace/edit
// required
//      body        name,workspaceId
// method       post

router.route("/edit").post(editWorkspace);

module.exports = router;
