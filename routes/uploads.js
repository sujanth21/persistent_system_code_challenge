const express = require("express");
const { uploadFile } = require("../controllers/uploads");

const router = express.Router();

router.route("/").post(uploadFile);

module.exports = router;
