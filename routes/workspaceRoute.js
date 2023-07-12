const express = require("express");
const router = express.Router();
const { createWorkspace, editWorkspace } = require('../controllers/workspace/workspace')

// @desc        create workspace 
// route        http://localhost:6090/api/workspace/create
// method       post
router.route("/create").post(createWorkspace);

// @desc        edit workspace 
// route        http://localhost:6090/api/workspace/edit
// method       post

router.route("/edit").post(editWorkspace);

module.exports = router;