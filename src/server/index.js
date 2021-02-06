var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
import Game from './entities/Game.js';
import Player from './entities/Player.js';
import {
  disconnectPlayer, startGame, increaseBagIndex, refillBag, giveLinesToOpponents,
  updateOpponentList, isGameRunning, giveInfoToPlayer, playerHasLoose, resetServerState,
  wrongInfo,
} from './helpers/Socket.js';

let gamesList = [];

let url = null;

app.get('/build/bundle.js', (req, res) => {
  console.log("build/bundle.js");
  res.sendFile(path.resolve(__dirname + '/../../build/client.js'));
});

app.get('/sounds/tetris-theme.mp3', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../../sounds/tetris-theme.mp3'));
});

app.get('/fonts/:font', (req, res) => {
  const font = req.params.font;
  res.set('Cache-control', 'public, max-age=300');
  res.sendFile(path.resolve(__dirname + `./../client/fonts/${font}`));
});

app.get('/images/:image', (req, res) => {
  const image = req.params.image;
  res.sendFile(path.resolve(__dirname + `./../client/images/${image}`));
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
  url = req.url;
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('onClientLoad', (hash) => {
    const info = hash.match(/^#(.+)\[(.+)\]$/);
    console.log('a user connected');
    if (!info || (!info[1] || !info[2])) {
      wrongInfo(socket);
      return;
    }
    const player = new Player(socket.id, info[2]);
    let currentGame = isGameExists(info[1]);
    if (currentGame === false) {
      currentGame = new Game(info[1]);
      gamesList.push(currentGame);
    }
    currentGame.addPlayer(player);
    giveInfoToPlayer(socket, player.id, player.name);
    isGameRunning(socket, currentGame, player);
    startGame(io, socket, currentGame);
    disconnectPlayer(socket, currentGame);
    updateOpponentList(socket, currentGame, player);
    increaseBagIndex(socket, player, currentGame);
    socket.nsp.to(player.id).emit('sendIsAdmin', player.admin);
    giveLinesToOpponents(socket, player, currentGame);
    playerHasLoose(socket, currentGame);
    resetServerState(socket, currentGame);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
