const express = require("express");
const getLabels = require("../controller/labelController");

const router = express.Router();

router.route("/").get(getLabels);

module.exports = router;
