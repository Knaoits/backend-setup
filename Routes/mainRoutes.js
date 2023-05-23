const express = require("express");
const router = express.Router();
const controller = require("../Controllers");


// admin Side Api's
router.post("/admin/login",controller.Admin.AdminLogin)

module.exports = router;    