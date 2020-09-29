import { STATE_0 } from '../../client/constants/rotateConstants.js';
import Bag from '../entities/Bag.js';

const isPlayersInGame = (currentGame) => {
  if (currentGame.playerList.length === 0) {
    console.log('no more players in the game');
  }
};

export const disconnectPlayer = (socket, currentGame) => {
  socket.on('disconnect', () => {
    currentGame.removePlayer(socket.id);
    isPlayersInGame(currentGame);
    socket.nsp.to(currentGame.admin.id).emit('sendIsAdmin', true);
    for (let i = 0; i < currentGame.playerList.length ; i++) {
      socket.nsp.to(currentGame.playerList[i].id).emit('removePlayerFromOpponentList', socket.id);
    }
  });
};

export const startGame = (io, socket, currentGame) => {
  socket.on('startGame', () => {
    currentGame.bag = new Bag(currentGame.id, currentGame.playerList);
    io.emit('launchGame', {
      piece: currentGame.bag.givePiecesToPlayer(0, 1),
      nextPiece: currentGame.bag.givePiecesToPlayer(1, 1),
    });
    currentGame.setIsGameRunning(true);
  });
};

export const increaseBagIndex = (socket, player, currentGame) => {
  socket.on('increaseBagIndex', (stack, stackHigh, score) => {
    player.stack = stack;
    player.score = score;
    socket.broadcast.emit('updatePlayerSpectre', player);
    player.bagIndex += 1;
    socket.nsp.to(player.id).emit('getNextPieceFromServer', {
      piece: currentGame.bag.givePiecesToPlayer(player.bagIndex, 1),
      nextPiece: currentGame.bag.givePiecesToPlayer(player.bagIndex + 1, 1),
      stackHigh,
    });
  });
};

export const refillBag = (socket, player, currentGame) => {
  socket.on('refillBag', () => {
    socket.nsp.to(player.id).emit('getNextPieceFromServer', {
      piece: currentGame.bag.givePiecesToPlayer(player.bagIndex, 1),
      nextPiece: currentGame.bag.givePiecesToPlayer(player.bagIndex + 1, 1),
    });
  });
};

export const updateOpponentList = (socket, currentGame, player) => {
  for (let i = 0; i < currentGame.playerList.length; i++) {
    console.log(currentGame.playerList[i].id);
    if (currentGame.playerList[i].id !== player.id) {
      socket.nsp.to(player.id).emit('updateOpponentList', currentGame.playerList[i]);
      socket.nsp.to(currentGame.playerList[i].id).emit('updateOpponentList', player);
    }
  }
};

export const giveLinesToOpponents = (socket, player, currentGame) => {
  socket.on('giveLinesToOpponents', (linesErased, opponentList, piece) => {
    for (let i = 0; i < opponentList.length; i++) {
      const stack = opponentList[i].stack;
      const id = opponentList[i].id;
      if (stack) {
        stack.forEach((brick) => {
          brick.y -= linesErased;
        });
      }
      let y = 19;
      for (let i = 0; i < linesErased; i++) {
        for (let x = 0; x < 10; x++) {
          const brick = { x, y, color: '#808080' };
          stack.push(brick);
        }
        y--;
      }
      for (let j = 0; j < currentGame.playerList.length; j++) {
        if (currentGame.playerList[j].id === id) {
          currentGame.playerList[j].stack = stack;
        }
      }
      socket.nsp.to(id).emit('linesFromOtherPlayers', stack, linesErased);
    }
  });
};

export const isGameRunning = (socket, currentGame, player) => {
  if (currentGame.getIsGameRunning() === true) {
    console.log('je suis bien rentré la');
    player.setIsWaiting(true);
    console.log(player.getIsWaiting());
    console.log(currentGame);
    socket.nsp.to(player.id).emit('newPlayerWhileGameRunning', true);
  }
};

export const giveInfoToPlayer = (socket, id, name) => {
  socket.nsp.to(id).emit('giveInfoToPlayer', id, name);
};

export const playerHasLoose = (socket, currentGame) => {
  socket.on('playerHasLoose', (id) => {
    console.log(id);
    let aliveCount = 0;
    for (let i = 0; i < currentGame.playerList.length; i++) {
      if (id === currentGame.playerList[i].id) {
        currentGame.playerList[i].setIsLoose(true);
      }
    }
    console.log(currentGame);
    for (let j = 0; j < currentGame.playerList.length; j++) {
      console.log(currentGame.playerList[j].getIsLoose());
      console.log(currentGame.playerList[j].getIsWaiting());
      console.log(aliveCount);
      if (currentGame.playerList[j].getIsLoose() === false
        && currentGame.playerList[j].getIsWaiting() === false) {
        aliveCount += 1;
      }
    }
    console.log('alive');
    console.log(aliveCount);
    if (aliveCount === 1) {
      for (let k = 0; k < currentGame.playerList.length; k++) {
        if (currentGame.playerList[k].getIsLoose() === false
          && currentGame.playerList[k].getIsWaiting() === false) {
          socket.nsp.to(currentGame.playerList[k].id).emit('victory');
          currentGame.setIsGameRunning(false);
        }
      }
    }
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
