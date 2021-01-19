import { START_BOARD, MULTI_WAITING, VICTORY, WRONG_URL } from '../constants/statusConstants';
import { generatePiece } from './PieceGenerations';
import { savePieceAction, saveNextPieceAction } from '../actions/save';

export function checkIsAdmin(saveIsAdmin) {
  socket.on('sendIsAdmin', (sendIsAdmin) => {
    saveIsAdmin(sendIsAdmin);
  });
}

export function launchGame(saveGameState, savePiece, saveNextPiece, saveGameOptions, saveLevels) {
  socket.on('launchGame', ({ piece, nextPiece, gameOptions, blindOptions }) => {
    savePiece(generatePiece(piece[0], blindOptions));
    saveNextPiece(generatePiece(nextPiece[0], blindOptions));
    saveGameState(START_BOARD);
    saveGameOptions(gameOptions);
    saveLevels(gameOptions.levelStart);
  });
}

export function getNextPieceFromServer(stack, stackHigh, score) {
  return function (dispatch) {
    return new Promise((res) => {
      socket.emit('increaseBagIndex', stack, stackHigh, score);
      socket.on('getNextPieceFromServer', ({piece, nextPiece, stackHigh, blindOptions}) => {
        const pieceTmp = generatePiece(piece[0], blindOptions);
        if (stackHigh === true) {
          console.error(pieceTmp.bricks);
          pieceTmp.bricks.forEach((brick) => {
            brick.y -= 1;
          });
          console.error(pieceTmp.bricks);
        }
        res({
          piece: pieceTmp,
          nextPiece: generatePiece(nextPiece[0], blindOptions),
        });
      });
    }).then(
      (res) => {
        socket.off('getNextPieceFromServer');
        console.error(res);
        dispatch(savePieceAction(res.piece));
        dispatch(saveNextPieceAction(res.nextPiece));
      });
  }
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
