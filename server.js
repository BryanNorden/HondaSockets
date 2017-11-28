var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");



app.use(bodyParser.json());
var port = process.env.PORT || 8080;
console.log('!!!!PORT IS: ', port);
io.on('connection', function(socket){
  socket.on('accidentReport', function(report){
    console.log('!!!accidentReport: ', report);
    io.emit('newAccident', report);
  });
  socket.on('vehicleAssignment', function(assignment){
    console.log('!!!vehicleAssignment: ', assignment);
    io.emit('newAssignment', assignment);
  });
  socket.on('vehicleAccident', function(accident){
    console.log('!!!vehicleAccident: ', accident);
    io.emit('newVehicleAccident', accident);
  })
  console.log('a user connected');
});

app.post('/report', function(req, res) {
  console.log('!!!GTREAT SUCCESS')
  res.send(200);
});

server.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});