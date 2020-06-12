import {
  SAVE_PIECE, SAVE_STACK, SAVE_GAME_STATE, SAVE_SCORE, SAVE_SPEED, SAVE_VOLUME,
  SAVE_LEVELS, SAVE_LINES_ERASED, SAVE_BAG, SAVE_HAS_TO_FALL, RESET_STATE,
} from '../constants/saveConstants';

export const savePieceAction = (piece) => ({
  type: SAVE_PIECE,
  piece,
});

export const saveStackAction = (stack) => ({
  type: SAVE_STACK,
  stack,
});

export const saveGameStateAction = (gameState) => ({
  type: SAVE_GAME_STATE,
  gameState,
});

export const saveScoreAction = (score) => ({
  type: SAVE_SCORE,
  score,
});

export const saveLevelsAction = (levels) => ({
  type: SAVE_LEVELS,
  levels,
});

export const saveLinesErasedAction = (linesErased) => ({
  type: SAVE_LINES_ERASED,
  linesErased,
});

export const saveBagAction = (bag) => ({
  type: SAVE_BAG,
  bag,
});

export const saveHasToFallAction = (hasToFall) => ({
  type: SAVE_HAS_TO_FALL,
  hasToFall,
});

export const resetStateAction = (state) => ({
  type: RESET_STATE,
  state,
});

export const saveSpeedAction = (speed) => ({
  type: SAVE_SPEED,
  speed,
});

export const saveVolumeAction = (volume) => ({
  type: SAVE_VOLUME,
  volume,
});
