import Bag from '../entities/Bag.js';

export const disconnectPlayer = (socket, currentGame) => {
  socket.on('disconnect', () => {
    currentGame.removePlayer(socket.id);
    console.log('user disconnected: ' + socket.id);
    console.log(currentGame);
    socket.nsp.to(currentGame.admin.id).emit('sendIsAdmin', true);
  });
};

export const startGameMulti = (io, socket, currentGame) => {
  socket.on('startGameMulti', () => {
    currentGame.bag = new Bag(currentGame.id, currentGame.playerList);
    io.emit('launchMulti', {
      piece: currentGame.bag.givePiecesToPlayer(0, 1),
      nextPiece: currentGame.bag.givePiecesToPlayer(1, 1),
    });
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