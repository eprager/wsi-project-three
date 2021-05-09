"use strict";
var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({
  extended: false
}));

router.get('/', function(req, res) {
  console.log("GET INDEX");
  console.log(req.body);
  res.render('index');
});

router.post('/', function(req, res) {
  console.log("POST INDEX");
  console.log(req.body);
  res.redirect('results');
});

module.exports = router;
