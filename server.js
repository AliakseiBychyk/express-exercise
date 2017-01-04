var express = require('express');

var app = express();

app.use(function (req, res, next) {
  console.log('Hello from the middleware!');
  next();
})

app.get('/', function (req, res) {
  res.send("Show me the way to the next whiskey bar, oh don't ask why...");
});

// sample http://localhost:3002/user/Aleks?option=server-test
app.get('/user/:user', function (req, res) {
  res.send('Page for user ' + req.params.user + ' with option ' + req.query.option);
})

var server = app.listen(3002, function () {
  console.log('Server running on http://localhost:' + server.address().port);
});
