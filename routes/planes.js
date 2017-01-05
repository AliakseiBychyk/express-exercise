var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  var date = new Date();
  console.log('Time: ' + date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds() + ' ' + date.getDate() +'/' + date.getMonth()+1 +'/' + date.getFullYear());
  next();
});

router.get('/', function (req, res) {
  res.send('New aircrafts available!');
});

router.get('/about', function (req, res) {
  res.send('It is now that you can learn more about aircrafts!');
});

module.exports = router;