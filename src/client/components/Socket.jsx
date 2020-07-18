import React from 'react';
import { connect } from 'react-redux';
import { checkIsAdmin, launchMulti, getNextPieceFromServer, updatePlayerSpectre } from '../helpers/SocketOn';
import { onClientLoad } from '../helpers/SocketEmit';
import { saveIsAdminAction, saveGameStateAction, saveNextPieceAction, savePieceAction, saveOpponentListAction } from '../actions/save';

const Socket = ({
  saveIsAdmin, saveGameState, savePiece, saveNextPiece,
  saveOpponentList,
}) => {
  console.log('salut socket');
  onClientLoad();
  checkIsAdmin(saveIsAdmin);
  launchMulti(saveGameState, savePiece, saveNextPiece);
  getNextPieceFromServer(savePiece, saveNextPiece);
  updatePlayerSpectre(saveOpponentList);
  /* if (gameState === IN_MULTI) {
    startGameMulti();
  } */
  return null;
};

/* const mapStateToProps = (state) => ({
  gameState: state.gameState,
}); */

const mapDispatchToProps = (dispatch) => ({
  savePiece: (piece) => {
    dispatch(savePieceAction(piece));
  },
  saveIsAdmin: (isAdmin) => {
    dispatch(saveIsAdminAction(isAdmin));
  },
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
  saveNextPiece: (nextPiece) => {
    dispatch(saveNextPieceAction(nextPiece));
  },
  saveOpponentList: (player) => {
    dispatch(saveOpponentListAction(player));
  }
});

export default connect(null, mapDispatchToProps)(Socket);