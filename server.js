var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
var port = 8080 || process.env.PORT;
app.get('/*', function(req, res) {
  res.send(201);
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});