var express = require('express');
var path = require('path');

var app = express();

// custom middleware that outputs greeting and current URL to the console
app.use(function (req, res, next) {
  console.log('Hello from the middleware!');
  console.log(server.address().family + ' http://localhost:' + server.address().port);
  console.log(req.headers.host + req.url);
  next();
})

app.get('/', function (req, res) {
  res.send("Show me the way to the next whiskey bar, oh don't ask why...");
});

// sample http://localhost:3002/user/Aleks?option=server-test
app.get('/user/:user', function (req, res) {
  res.send('Page for user ' + req.params.user + ' with option ' + req.query.option);
});

app.use(express.static(path.join(__dirname + '/public')));

var server = app.listen(3002, function () {
  console.log('Server running on http://localhost:' + server.address().port);
});
