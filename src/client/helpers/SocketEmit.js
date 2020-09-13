export function onClientLoad() {
  socket.emit('onClientLoad');
};

export function startGameMulti() {
  socket.emit('startGameMulti');
};

export function refillBag() {
  socket.emit('refillNextPiece');
};

export function increaseNextPieceIndex(stack, stackHigh, score) {
  socket.emit('increaseBagIndex', stack, stackHigh, score);
};

export function giveLinesToOpponents(linesErased, opponentList) {
  socket.emit('giveLinesToOpponents', linesErased, opponentList);
};