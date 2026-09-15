// var express = require('express');
// var router = express.Router();

const express = require("express");
const router = express.Router();
// const { router } = require("../app");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Ficha 10" });
});

module.exports = router;
