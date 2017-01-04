var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send("Show me the way to the next whiskey bar, oh don't ask why...");
});

var server = app.listen(3002, function () {
  console.log('Server running on http://localhost:' + server.address().port);
});
