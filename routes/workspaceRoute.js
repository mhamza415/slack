const express = require("express");
const router = express.Router();
const {
  createWorkspace,
  editWorkspace,
} = require("../controllers/workspace/workspace");

// @desc        create workspace
// route        http://localhost:6090/api/workspace/create
// required
//      body        name
// method       post
router.route("/create").post(createWorkspace);

// @desc        edit workspace
// route        http://localhost:6090/api/workspace/edit
// required
//      body        name,workspaceId
// method       post

router.route("/edit").post(editWorkspace);

module.exports = router;
