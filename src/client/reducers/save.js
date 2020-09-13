import _ from 'lodash';
import {
  SAVE_PIECE, SAVE_STACK, SAVE_GAME_STATE, SAVE_SCORE, SAVE_LEVELS, SAVE_LINES_ERASED,
  SAVE_NEXT_PIECE, SAVE_HAS_TO_FALL, RESET_STATE, SAVE_SPEED, SAVE_VOLUME, SAVE_IS_ADMIN,
  SAVE_OPPONENT_LIST, SAVE_LINES_BEING_ERASED,
} from '../constants/saveConstants';
import { IN_MENU } from '../constants/statusConstants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_PIECE:
      return { ...state, piece: action.piece };
    case SAVE_STACK:
      return { ...state, stack: action.stack, piece: null };
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
    case SAVE_OPPONENT_LIST:
      let newOpponentList = _.cloneDeep(state.opponentList);
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
    case RESET_STATE:
      return {
        stack: [],
        gameState: IN_MENU,
        inOptions: false,
        score: 0,
        levels: 1,
        linesErased: 0,
        piece: null,
        nextPiece: null,
        speed: 1000,
        hasToFall: false,
        isAdmin: false,
        opponentList: [],
      };
    default:
      return state;
  }
};

export default reducer;
