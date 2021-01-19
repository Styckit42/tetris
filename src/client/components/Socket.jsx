import React from 'react';
import { connect } from 'react-redux';
import {
  checkIsAdmin, launchGame, getNextPieceFromServer, updatePlayerSpectre,
  linesFromOtherPlayers, updateOpponentList, removePlayerFromOpponentList,
  newPlayerWhileGameRunning, receivePlayerInfoFromServer, victory, wrongInfo, changeGameOptions,
} from '../helpers/SocketOn';
import { onClientLoad } from '../helpers/SocketEmit';
import {
  saveIsAdminAction, saveNextPieceAction, savePieceAction, saveLevelsAction,
  saveOpponentListAction, saveStackAction, savePieceAfterChangeAction,
  saveOpponentListAfterRemoveAction, savePlayerIdAction, savePlayerNameAction,
  saveGameStateAction, saveShadowPieceAction,
} from '../actions/save';
import { saveGameOptionsAction } from '../actions/options';

const Socket = ({
  saveIsAdmin, saveGameState, savePiece, saveNextPiece,
  saveOpponentList, saveStack, savePieceAfterChange, saveOpponentListAfterRemove,
  savePlayerId, savePlayerName, saveGameOptions, saveLevels, saveShadowPiece,
}) => {
  onClientLoad();
  checkIsAdmin(saveIsAdmin);
  launchGame(saveGameState, savePiece, saveNextPiece, saveGameOptions, saveLevels, saveShadowPiece);
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
  saveGameOptions: (gameOptions) => {
    dispatch(saveGameOptionsAction(gameOptions));
  },
  saveLevels: (levels) => {
    dispatch(saveLevelsAction(levels));
  },
  saveShadowPiece: (shadowPiece) => {
    dispatch(saveShadowPieceAction(shadowPiece));
  },
});

export default connect(null, mapDispatchToProps)(Socket);
