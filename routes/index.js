"use strict";
var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

router.get('/', function(req, res) {
  console.log("GET INDEX");
  console.log(`${req.body}`);
  res.render('index');
});

router.post('/', function(req, res) {
  console.log("POST INDEX");
  console.log(`${req.body}`);
});

router.post('/search', async(req, res) => {
  console.log("POST SEARCH");
  try {
    console.log(req.body);
  } catch (error) {
    //handle error 
  }
});

module.exports = router;
