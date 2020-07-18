var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
import Game from './entities/Game.js';
import Player from './entities/Player.js';
import { disconnectPlayer, startGameMulti, increaseBagIndex, refillBag } from './helpers/Socket.js';

let gamesList = [];

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../../build/bundle.js'));
});

const isGameExists = (id) => {
  console.log(gamesList);
  for (let i = 0; i < gamesList.length; i++) {
    if (gamesList[i].getId() === id) {
      return gamesList[i];
    }
  }
  return false;
};

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('onClientLoad', () => {
    console.log('a user connected');
    const player = new Player(socket.id);
    let currentGame = isGameExists(socket.handshake.headers.referer);
    if (currentGame === false) {
      currentGame = new Game(socket.handshake.headers.referer);
      gamesList.push(currentGame);
    }
    currentGame.addPlayer(player);
    startGameMulti(io, socket, currentGame);
    disconnectPlayer(socket, currentGame);
    increaseBagIndex(socket, player, currentGame);
    socket.nsp.to(player.id).emit('sendIsAdmin', player.admin);
    refillBag(socket, player, currentGame);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


/* socket.on('disconnect', () => {
  currentGame.removePlayer(socket.id);
  console.log('user disconnected: ' + socket.id);
  console.log(currentGame);
  socket.nsp.to(currentGame.admin.id).emit('sendIsAdmin', true);
});
socket.on('startGameMulti', () => {
  createBag(currentGame);
  io.emit('launchMulti', currentGame.bag.mainBag);
});
socket.on('increaseBagIndex', () => {
  player.bagIndex += 1;
  console.log('bagIndex : ' + player.bagIndex);
});
socket.on('refillBag', () => {
  socket.nsp.to(player.id).emit('getBagFromServer', currentGame.bag.givePiecesToPlayer(player.bagIndex, 7));
});
*/