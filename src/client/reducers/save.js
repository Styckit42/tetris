import { SAVE_PIECE, SAVE_STACK, SAVE_IN_MENU} from '../constants/saveConstants.js'

const reducer = (state = {} , action) => {
  switch(action.type){
    case SAVE_PIECE:
      return {...state, piece: action.piece }
    case SAVE_STACK:
      return {...state, stack: action.stack}
    case SAVE_IN_MENU:
      return { ...state, inMenu: action.inMenu}
    default: 
      return state
  }
}

export default reducer