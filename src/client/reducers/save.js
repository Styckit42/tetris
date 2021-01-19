import _ from 'lodash';
import {
  SAVE_PIECE, SAVE_STACK, SAVE_GAME_STATE, SAVE_SCORE, SAVE_LEVELS, SAVE_LINES_ERASED,
  SAVE_NEXT_PIECE, SAVE_HAS_TO_FALL, RESET_STATE, SAVE_SPEED, SAVE_VOLUME, SAVE_IS_ADMIN,
  SAVE_OPPONENT_LIST, SAVE_LINES_BEING_ERASED, SAVE_PIECE_AFTER_CHANGE,
  SAVE_OPPONENT_LIST_AFTER_REMOVE, SAVE_PLAYER_ID, SAVE_PLAYER_NAME, SAVE_SHADOW_PIECE,
} from '../constants/saveConstants';
import {
  SAVE_GAME_OPTIONS,
} from '../constants/optionsConstants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_PIECE:
      return { ...state, piece: action.piece };
    case SAVE_SHADOW_PIECE:
      return { ...state, shadowPiece: action.shadowPiece };
    case SAVE_STACK:
      return { ...state, stack: action.stack };
    case SAVE_GAME_STATE:
      return { ...state, gameState: action.gameState };
    case SAVE_SCORE:
      return { ...state, score: action.score };
    case SAVE_LEVELS:
      return { ...state, levels: action.levels };
    case SAVE_LINES_ERASED:
      return { ...state, linesErased: action.linesErased };
    case SAVE_NEXT_PIECE:
      return { ...state, nextPiece: action.nextPiece };
    case SAVE_HAS_TO_FALL:
      return { ...state, hasToFall: action.hasToFall };
    case SAVE_SPEED:
      return { ...state, speed: action.speed };
    case SAVE_VOLUME:
      return { ...state, volume: action.volume };
    case SAVE_IS_ADMIN:
      return { ...state, isAdmin: action.isAdmin };
    case SAVE_LINES_BEING_ERASED:
      return { ...state, linesBeingErased: action.linesBeingErased };
    case SAVE_PLAYER_ID:
      return { ...state, playerId: action.playerId };
    case SAVE_PLAYER_NAME:
      return { ...state, playerName: action.playerName };
    case SAVE_OPPONENT_LIST:
      const newOpponentList = _.cloneDeep(state.opponentList);
      let isFind = false;
      for (let i = 0; i < newOpponentList.length; i++) {
        if (action.player.id === newOpponentList[i].id) {
          newOpponentList[i].score = action.player.score;
          newOpponentList[i].stack = action.player.stack;
          isFind = true;
        }
      }
      if (isFind === false) {
        newOpponentList.push(action.player);
      }
      return { ...state, opponentList: newOpponentList };
    case SAVE_OPPONENT_LIST_AFTER_REMOVE:
      const newOpponentLst = _.cloneDeep(state.opponentList);
      for (let i = 0; i < newOpponentLst.length; i++) {
        if (action.id === newOpponentLst[i].id) {
          newOpponentLst.splice(i, 1);
        }
      }
      return { ...state, opponentList: newOpponentLst };
    case SAVE_PIECE_AFTER_CHANGE:
      const newPiece = _.cloneDeep(state.piece.bricks);
      const pieceReturn = [];
      for (let i = 0; i < newPiece.length; i++) {
        pieceReturn.push({
          x: newPiece[i].x,
          y: newPiece[i].y - action.linesErased,
          color: newPiece[i].color,
        });
      }
      return { ...state, piece: { ...state.piece, bricks: pieceReturn } };
    case SAVE_GAME_OPTIONS:
      return { ...state, gameOptions: action.gameOptions };
    case RESET_STATE:
      const admin = state.isAdmin;
      const {
        gameState, playerId, playerName, opponentList, levels, gameOptions,
      } = state;
      for (let i = 0; i < opponentList.length; i++) {
        opponentList[i].stack = [];
      }
      return {
        stack: [],
        gameState,
        inOptions: false,
        score: 0,
        levels,
        linesErased: 0,
        piece: null,
        shadowPiece: null,
        nextPiece: null,
        speed: 1000,
        hasToFall: false,
        isAdmin: admin,
        playerId,
        playerName,
        opponentList,
        gameOptions,
      };
    default:
      return state;
  }
};

export default reducer;
