var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var io = require('socket.io')(app);

app.use(bodyParser.json());
var port = process.env.PORT || 8080;

io.on('connection', function(socket){
  socket.on('accidentReport', function(report){
    io.emit('newAccident', report);
  });
  console.log('a user connected');
});

app.post('/report', function(req, res) {
  console.log('!!!GTREAT SUCCESS')
  res.send(200);
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});