// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// routing to page 1
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/home.html');
});

// routing to page 2 - note you will need to add routings for pages 3 and 4
app.get("/services.html", function (request, response) {
  response.sendFile(__dirname + '/public/services.html');
});

// routing page 3
app.get("/rates.html", function (request, response) {
  response.sendFile(__dirname + '/public/rates.html');
});
// routing page 4
app.get("/aboutus.html", function (request, response) {
  response.sendFile(__dirname + '/public/aboutus.html');
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
