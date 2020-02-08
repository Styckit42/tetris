import { SAVE_PIECE, SAVE_STACK, SAVE_IN_MENU, SAVE_SCORE, SAVE_LEVELS, SAVE_LINES_ERASED, SAVE_BAG} from '../constants/saveConstants.js'

const reducer = (state = {} , action) => {
  switch(action.type){
    case SAVE_PIECE:
      return {...state, piece: action.piece }
    case SAVE_STACK:
      return {...state, stack: action.stack}
    case SAVE_IN_MENU:
      return { ...state, inMenu: action.inMenu}
    case SAVE_SCORE:
      return {...state, score: action.score}
    case SAVE_LEVELS:
      return {...state, levels: action.levels}
    case SAVE_LINES_ERASED:
      return {...state, linesErased: action.linesErased}
    case SAVE_BAG:
      return {...state, bag: action.bag}
    default: 
      return state
  }
}

export default reducer