var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ' + Date.now());
  next();
});

router.get('/', function (req, res) {
  res.send('New aircrafts available!');
});

router.get('/about', function (req, res) {
  res.send('It is now that you can learn more about aircrafts!');
});

module.exports = router;