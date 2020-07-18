import { IN_SOLO } from '../constants/statusConstants';
import { generatePiece } from './PieceGenerations';

export function checkIsAdmin(saveIsAdmin) {
  socket.on('sendIsAdmin', function (sendIsAdmin) {
    console.log('check emit');
    console.log(sendIsAdmin);
    saveIsAdmin(sendIsAdmin);
    // peut etre du redux
  });
};

export function launchMulti(saveGameState, savePiece, saveNextPiece) {
  socket.on('launchMulti', function ({ piece, nextPiece }) {
    console.log(piece);
    console.log(nextPiece);
    savePiece(generatePiece(piece[0]));
    saveNextPiece(generatePiece(nextPiece[0]));
    saveGameState(IN_SOLO);
  });
};

export function getNextPieceFromServer(savePiece, saveNextPiece) {
  socket.on('getNextPieceFromServer', function ({ piece, nextPiece, stackHigh }) {
    const pieceTmp = generatePiece(piece[0])
    if (stackHigh === true) {
      pieceTmp.bricks.forEach((brick) => {
        brick.y -= 1;
      });
      savePiece(pieceTmp);
    } else {
      savePiece(pieceTmp);
    }
    saveNextPiece(generatePiece(nextPiece[0]));
  });
};

export function updatePlayerSpectre(saveOpponentList) {
  socket.on('updatePlayerSpectre', function (player) {
    saveOpponentList(player);
  });
}
