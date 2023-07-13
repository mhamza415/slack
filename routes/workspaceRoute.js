const express = require("express");
const router = express.Router();
const {
  createWorkspace,
  editWorkspace,
} = require("../controllers/workspace/workspace");
const {protect} = require("../middlewares/authMiddleware");
const {
  saveWorkSpaceOfUser,
} = require("../controllers/workspace/workspace_user");

// @desc        create workspace
// route        http://localhost:6090/api/workspace/create
// required
//      body        w_name
//      required    token
// method       post
router.route("/create").post(protect, saveWorkSpaceOfUser);
// router.route("/create").post(createWorkspace);

// @desc        edit workspace
// route        http://localhost:6090/api/workspace/edit
// required
//      body        name,workspaceId
// method       post

router.route("/edit").post(protect, editWorkspace);

module.exports = router;
