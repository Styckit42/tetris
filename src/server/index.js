var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
import Player from './entities/Player'

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  const player = new Player(socket.id);
  console.log(player)
  console.log('a user connected');
  console.log(socket.id);
});