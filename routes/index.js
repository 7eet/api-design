var express = require("express");
var router = express.Router();
var localStorage = require('../controller/local');

router.get("/", function (req, res, next) {
  data = localStorage.readFile("data.txt");
  return res.render("content/home", {title: "Home", data: data});
});

module.exports = router;
