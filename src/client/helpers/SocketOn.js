import { START_BOARD, MULTI_WAITING, VICTORY, WRONG_URL } from '../constants/statusConstants';
import PieceGenFuncs from './PieceGenerations';

export function checkIsAdmin(saveIsAdmin) {
  socket.on('sendIsAdmin', (sendIsAdmin) => {
    saveIsAdmin(sendIsAdmin);
  });
}

export function launchGame(saveGameState, savePiece, saveNextPiece, saveGameOptions, saveLevels) {
  socket.on('launchGame', ({ piece, nextPiece, gameOptions, blindOptions }) => {
    savePiece(PieceGenFuncs.generatePiece(piece[0], blindOptions));
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0], blindOptions));
    saveGameState(START_BOARD);
    saveGameOptions(gameOptions);
    saveLevels(gameOptions.levelStart);
  });
}

export function getNextPieceFromServer(savePiece, saveNextPiece) {
  socket.on('getNextPieceFromServer', ({ piece, nextPiece, stackHigh, blindOptions }) => {
    const pieceTmp = PieceGenFuncs.generatePiece(piece[0], blindOptions);
    if (stackHigh === true) {
      pieceTmp.bricks.forEach((brick) => {
        brick.y -= 1;
      });
      savePiece(pieceTmp);
    } else {
      savePiece(pieceTmp);
    }
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0], blindOptions));
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
  });
}
