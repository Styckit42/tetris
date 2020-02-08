import {SAVE_PIECE, SAVE_STACK, SAVE_IN_MENU, SAVE_SCORE, SAVE_LEVELS, SAVE_LINES_ERASED, SAVE_BAG} from '../constants/saveConstants.js'

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

export const saveScoreAction = (score) => {
  return {
    type: SAVE_SCORE,
    score,
  }
}

export const saveLevelsAction = (levels) => {
  return {
    type: SAVE_LEVELS,
    levels,
  }
}

export const saveLinesErasedAction = (linesErased) => {
  return {
    type: SAVE_LINES_ERASED,
    linesErased,
  }
}

export const saveBagAction = (bag) => {
  return {
    type: SAVE_BAG,
    bag,
  }
}