const express = require('express')
const router = express.Router()
const path = require("path");

router.get("/shop", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shop.html"));
  });

  module.exports = router;