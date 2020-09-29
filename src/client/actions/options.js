import {
  OPTIONS_LEVEL_START, OPTIONS_BOARD_SIZE, OPTIONS_DALTONIEN, OPTIONS_GAME_TYPE
} from '../constants/optionsConstants';

export const optionsLevelStartAction = (level) => ({
  type: OPTIONS_LEVEL_START,
  level,
});

export const optionsBoardSizeAction = (width, height) => ({
  type: OPTIONS_BOARD_SIZE,
  width,
  height,
});

export const optionsDaltonienAction = (bol) => ({
  type: OPTIONS_DALTONIEN,
  bol,
});

export const optionsGameTypeAction = (gameType) => ({
  type: OPTIONS_GAME_TYPE,
  gameType,
});
