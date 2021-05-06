var express = require('express');
var router = express.Router();


router
  .route("/")
  .get((req, res) => res.render('results'))
  .post((req, res) => res.send("POST RESULTS"));


module.exports = router;
