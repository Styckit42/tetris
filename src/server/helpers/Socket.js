import Bag from '../entities/Bag.js';
import {aliveCount, checkGameOptions, giveLinesDestructibles, giveLinesIndestructible} from './Funcs.js';

export const isPlayersInGame = (currentGame) => {
  if (currentGame.playerList.length === 0) {
    currentGame.isGameRunning = false;
  }
};

export const disconnectPlayer = (socket, currentGame) => {
  socket.on('disconnect', () => {
    currentGame.removePlayer(socket.id);
    isPlayersInGame(currentGame);
    aliveCount(socket, currentGame);
    socket.nsp.to(currentGame.admin.id).emit('sendIsAdmin', true);
    for (let i = 0; i < currentGame.playerList.length ; i++) {
      socket.nsp.to(currentGame.playerList[i].id).emit('removePlayerFromOpponentList', socket.id);
    }
  });
};

export const startGame = (io, socket, currentGame) => {
  socket.on('startGame', (gameOptions) => {
    currentGame.setGameOptions(gameOptions);
    const blindOptions = currentGame.gameOptions.colorBlind;
    currentGame.bag = new Bag(currentGame.id, currentGame.playerList);
    for (let i = 0; i < currentGame.playerList.length; i++) {
      socket.nsp.to(currentGame.playerList[i].id).emit('launchGame', {
        piece: currentGame.bag.givePiecesToPlayer(0, 1),
        nextPiece: currentGame.bag.givePiecesToPlayer(1, 1),
        gameOptions,
        blindOptions,
      });
    }
    currentGame.setIsGameRunning(true);
  });
};

//MIDDLEWARE
export const increaseBagIndex = (socket, player, currentGame) => {
  socket.on('increaseBagIndex', (stack, stackHigh, score) => {
    player.stack = stack;
    player.score = score;
    socket.broadcast.emit('updatePlayerSpectre', player);
    player.bagIndex += 1;
    const blindOptions = currentGame.gameOptions.colorBlind;
    socket.nsp.to(player.id).emit('getNextPieceFromServer', {
      piece: currentGame.bag.givePiecesToPlayer(player.bagIndex, 1),
      nextPiece: currentGame.bag.givePiecesToPlayer(player.bagIndex + 1, 1),
      stackHigh,
      blindOptions,
    });
  });
};

export const updateOpponentList = (socket, currentGame, player) => {
  for (let i = 0; i < currentGame.playerList.length; i++) {
    if (currentGame.playerList[i].id !== player.id) {
      socket.nsp.to(player.id).emit('updateOpponentList', currentGame.playerList[i]);
      socket.nsp.to(currentGame.playerList[i].id).emit('updateOpponentList', player);
    }
  }
};

export const giveLinesToOpponents = (socket, player, currentGame) => {
  socket.on('giveLinesToOpponents', (linesErased, opponentList) => {
    switch (currentGame.gameOptions.gameType) {
      case (1):
        giveLinesIndestructible(linesErased, opponentList, currentGame, socket);
        break;
      case (2):
        giveLinesDestructibles(linesErased, opponentList, currentGame, socket);
        break;
      default:
        break;
    }
  });
};

export const isGameRunning = (socket, currentGame, player) => {
  if (currentGame.getIsGameRunning() === true) {
    player.setIsWaiting(true);
    socket.nsp.to(player.id).emit('newPlayerWhileGameRunning', true);
  }
};

export const giveInfoToPlayer = (socket, id, name) => {
  socket.nsp.to(id).emit('giveInfoToPlayer', id, name);
};

export const playerHasLoose = (socket, currentGame) => {
  socket.on('playerHasLoose', (id) => {
    for (let i = 0; i < currentGame.playerList.length; i++) {
      if (id === currentGame.playerList[i].id) {
        currentGame.playerList[i].setIsLoose(true);
      }
    }
    aliveCount(socket, currentGame);
  });
};

export const resetServerState = (socket, currentGame) => {
  socket.on('resetServerState', () => {
    for (let i = 0; i < currentGame.playerList.length ; i++) {
      currentGame.playerList[i].resetState();
    }
    currentGame.resetBag();
    currentGame.setIsGameRunning(false);
  });
};

export const wrongInfo = (socket) => {
  socket.nsp.to(socket.id).emit('wrongInfo');
};
