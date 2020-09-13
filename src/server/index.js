var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
import Game from './entities/Game.js';
import Player from './entities/Player.js';
import { disconnectPlayer, startGameMulti, increaseBagIndex, refillBag, giveLinesToOpponents } from './helpers/Socket.js';

let gamesList = [];

app.get('/build/bundle.js', (req, res) => {
  console.log("coucou david");
  res.sendFile(path.resolve(__dirname + '/../../build/client.js'));
});

const isGameExists = (id) => {
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
    giveLinesToOpponents(socket, player, currentGame);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});