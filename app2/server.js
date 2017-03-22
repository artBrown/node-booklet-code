// grab express
var express = require('express');

// create an express app
var app = express();

// create an express route for the home page
// http://localhost:8082/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start the server on port 8082
app.listen(8082);
// send a message
console.log('Server has started!');
