var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

router.get('/', function(req, res) {
  console.log("GET RESULTS");
  console.log(`${req.body}`);
  res.render('results');
});

router.post('/', function(req, res) {
  console.log("POST RESULTS");
  console.log(`${req.body}`);
  res.render('results');
});

router.post('/search', async(req, res) => {
  console.log("POST SEARCH");
  try {
    console.log(req.body);
  } catch (error) {
    
  }
});

module.exports = router;
