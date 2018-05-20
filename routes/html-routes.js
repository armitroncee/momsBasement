const express = require('express')
const router = express.Router()
const path = require("path");
const Product = require("../models/products")

router.get("/shop", function (req, res) {
    res.render("shop")
    })

router.get("/", function (req, res) {
  res.render("index")
});

module.exports = router;