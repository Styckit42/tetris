export function onClientLoad() {
  socket.emit('onClientLoad', window.location.hash);
}

export function startGameMulti() {
  socket.emit('startGameMulti');
}

export function refillBag() {
  socket.emit('refillNextPiece');
}

export function increaseNextPieceIndex(stack, stackHigh, score) {
  socket.emit('increaseBagIndex', stack, stackHigh, score);
}

export function giveLinesToOpponents(linesErased, opponentList, piece) {
  if (linesErased > 1) {
    socket.emit('giveLinesToOpponents', linesErased - 1, opponentList, piece);
  }
}

export function tellServerPlayerHasLoose(id) {
  socket.emit('playerHasLoose', id);
}

export function resetServerState() {
  socket.emit('resetServerState');
}
