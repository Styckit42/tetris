import {SAVE_PIECE, SAVE_STACK, SAVE_IN_MENU} from '../constants/saveConstants.js'

export const savePieceAction = (piece) => {
  return {
    type: SAVE_PIECE,
    piece
  }
}

export const saveStackAction = (stack) => {
  return {
    type: SAVE_STACK,
    stack,
  }
}

export const saveInMenuAction = (inMenu) => {
  return {
    type: SAVE_IN_MENU,
    inMenu,
  }
}