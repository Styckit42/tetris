import {
  SAVE_PIECE, SAVE_STACK, SAVE_GAME_STATE, SAVE_SCORE, SAVE_LEVELS, SAVE_LINES_ERASED,
  SAVE_BAG, SAVE_HAS_TO_FALL, RESET_STATE, SAVE_SPEED, SAVE_VOLUME,
} from '../constants/saveConstants';
import { IN_MENU } from '../constants/statusConstants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_PIECE:
      return { ...state, piece: action.piece };
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
    case SAVE_BAG:
      return { ...state, bag: action.bag };
    case SAVE_HAS_TO_FALL:
      return { ...state, hasToFall: action.hasToFall };
    case SAVE_SPEED:
      return { ...state, speed: action.speed };
    case SAVE_VOLUME:
      return { ...state, volume: action.volume };
    case RESET_STATE:
      return {
        stack: [],
        gameState: IN_MENU,
        inOptions: false,
        score: 0,
        levels: 1,
        linesErased: 0,
        piece: null,
        bag: null,
        speed: 1000,
        hasToFall: false,
      };
    default:
      return state;
  }
};

export default reducer;
