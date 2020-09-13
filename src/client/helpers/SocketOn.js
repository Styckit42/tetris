import { IN_SOLO } from '../constants/statusConstants';
import PieceGenFuncs from './PieceGenerations';

export function checkIsAdmin(saveIsAdmin) {
  socket.on('sendIsAdmin', function (sendIsAdmin) {
    saveIsAdmin(sendIsAdmin);
    // peut etre du redux
  });
};

export function launchMulti(saveGameState, savePiece, saveNextPiece) {
  socket.on('launchMulti', function ({ piece, nextPiece }) {
    savePiece(PieceGenFuncs.generatePiece(piece[0]));
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0]));
    saveGameState(IN_SOLO);
  });
};

export function getNextPieceFromServer(savePiece, saveNextPiece) {
  socket.on('getNextPieceFromServer', function ({ piece, nextPiece, stackHigh }) {
    const pieceTmp = PieceGenFuncs.generatePiece(piece[0]);
    console.log(stackHigh);
    if (stackHigh === true) {
      console.log(pieceTmp.bricks);
      pieceTmp.bricks.forEach((brick) => {
        brick.y -= 1;
      });
      console.log(pieceTmp.bricks);
      savePiece(pieceTmp);
    } else {
      savePiece(pieceTmp);
    }
    saveNextPiece(PieceGenFuncs.generatePiece(nextPiece[0]));
  });
};

export function updatePlayerSpectre(saveOpponentList) {
  socket.on('updatePlayerSpectre', function (player) {
    saveOpponentList(player);
  });
}
