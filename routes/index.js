"use strict";
var express = require('express');
var router = express.Router();

router
  .route("/")
  .get((req, res) => res.render('index'))
  .post((req, res) => res.send("POST INDEX"));


module.exports = router;
