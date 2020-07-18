export function onClientLoad() {
  socket.emit('onClientLoad');
};

export function startGameMulti() {
  socket.emit('startGameMulti');
};

export function refillBag() {
  socket.emit('refillNextPiece');
};

export function increaseNextPieceIndex(stackHigh) {
  socket.emit('increaseBagIndex', stackHigh);
};