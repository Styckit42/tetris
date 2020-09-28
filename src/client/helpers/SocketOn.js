import { IN_SOLO, MULTI_WAITING, VICTORY, WRONG_URL } from '../constants/statusConstants';
import PieceGenFuncs from './PieceGenerations';

export function checkIsAdmin(saveIsAdmin) {
  socket.on('sendIsAdmin', (sendIsAdmin) => {
    console.log(`is admin: ${sendIsAdmin}`);
    saveIsAdmin(sendIsAdmin);
  });
}

export function launchMulti(saveGameState, savePiece, saveNextPiece) {
  socket.on('launchMulti', ({ piece, nextPiece }) => {
    savePiece(PieceGenFuncs.generatePiece(piece[0]));
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0]));
    saveGameState(IN_SOLO);
  });
}

export function getNextPieceFromServer(savePiece, saveNextPiece) {
  socket.on('getNextPieceFromServer', ({ piece, nextPiece, stackHigh }) => {
    const pieceTmp = PieceGenFuncs.generatePiece(piece[0]);
    if (stackHigh === true) {
      pieceTmp.bricks.forEach((brick) => {
        brick.y -= 1;
      });
      savePiece(pieceTmp);
    } else {
      savePiece(pieceTmp);
    }
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0]));
  });
}

export function updatePlayerSpectre(saveOpponentList) {
  socket.on('updatePlayerSpectre', (player) => {
    saveOpponentList(player);
  });
}

export function linesFromOtherPlayers(saveStack, savePieceAfterChange) {
  socket.on('linesFromOtherPlayers', (stack, linesErased) => {
    savePieceAfterChange(linesErased);
    saveStack(stack);
  });
}

export function updateOpponentList(saveOpponentList) {
  socket.on('updateOpponentList', (player) => {
    saveOpponentList(player);
  });
}

export function removePlayerFromOpponentList(saveOpponentListAfterRemove) {
  socket.on('removePlayerFromOpponentList', (id) => {
    saveOpponentListAfterRemove(id);
  });
}

export function newPlayerWhileGameRunning(saveGameState) {
  socket.on('newPlayerWhileGameRunning', (bol) => {
    if (bol === true) {
      saveGameState(MULTI_WAITING);
    }
  });
}

export function receivePlayerInfoFromServer(savePlayerId, savePlayerName) {
  socket.on('giveInfoToPlayer', (id, name) => {
    savePlayerId(id);
    savePlayerName(name);
  });
}

export function victory(saveGameState) {
  socket.on('victory', () => {
    saveGameState(VICTORY);
  });
}

export function wrongInfo(saveGameState) {
  socket.on('wrongInfo', () => {
    saveGameState(WRONG_URL);
  })
}
