import React from 'react';
import { connect } from 'react-redux';
import {
  checkIsAdmin, launchGame, getNextPieceFromServer, updatePlayerSpectre,
  linesFromOtherPlayers, updateOpponentList, removePlayerFromOpponentList,
  newPlayerWhileGameRunning, receivePlayerInfoFromServer, victory, wrongInfo,
} from '../helpers/SocketOn';
import { onClientLoad } from '../helpers/SocketEmit';
import {
  saveIsAdminAction, saveNextPieceAction, savePieceAction,
  saveOpponentListAction, saveStackAction, savePieceAfterChangeAction,
  saveOpponentListAfterRemoveAction, savePlayerIdAction, savePlayerNameAction, saveGameStateAction,
} from '../actions/save';

const Socket = ({
  saveIsAdmin, saveGameState, savePiece, saveNextPiece,
  saveOpponentList, saveStack, savePieceAfterChange, saveOpponentListAfterRemove,
  savePlayerId, savePlayerName,
}) => {
  onClientLoad();
  checkIsAdmin(saveIsAdmin);
  launchGame(saveGameState, savePiece, saveNextPiece);
  getNextPieceFromServer(savePiece, saveNextPiece);
  updatePlayerSpectre(saveOpponentList);
  linesFromOtherPlayers(saveStack, savePieceAfterChange);
  updateOpponentList(saveOpponentList);
  removePlayerFromOpponentList(saveOpponentListAfterRemove);
  newPlayerWhileGameRunning(saveGameState);
  receivePlayerInfoFromServer(savePlayerId, savePlayerName);
  victory(saveGameState);
  wrongInfo(saveGameState);
  return null;
};

const mapDispatchToProps = (dispatch) => ({
  saveIsAdmin: (isAdmin) => {
    dispatch(saveIsAdminAction(isAdmin));
  },
  savePiece: (piece) => {
    dispatch(savePieceAction(piece));
  },
  savePieceAfterChange: (linesErased) => {
    dispatch(savePieceAfterChangeAction(linesErased));
  },
  saveStack: (stack) => {
    dispatch(saveStackAction(stack));
  },
  savePlayerName: (name) => {
    dispatch(savePlayerNameAction(name));
  },
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
  saveNextPiece: (nextPiece) => {
    dispatch(saveNextPieceAction(nextPiece));
  },
  saveOpponentList: (player) => {
    dispatch(saveOpponentListAction(player));
  },
  saveOpponentListAfterRemove: (id) => {
    dispatch(saveOpponentListAfterRemoveAction(id));
  },
  savePlayerId: (id) => {
    dispatch(savePlayerIdAction(id));
  },
});

export default connect(null, mapDispatchToProps)(Socket);
