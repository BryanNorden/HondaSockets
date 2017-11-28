var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
var port = 8080 || process.env.PORT;
app.get('/report', function(req, res) {
  console.log('!!!GTREAT SUCCESS')
  res.send(201);
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});