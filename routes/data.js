const express = require("express");
const { getJSONData } = require("../controllers/data");
const router = express.Router();

router.get("/", getJSONData);

module.exports = router;
