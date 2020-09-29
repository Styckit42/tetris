import {
  OPTIONS_LEVEL_START, OPTIONS_BOARD_SIZE, OPTIONS_COLOR_BLIND, OPTIONS_GAME_TYPE,
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

export const optionsColorBlindAction = (bol) => ({
  type: OPTIONS_COLOR_BLIND,
  bol,
});

export const optionsGameTypeAction = (gameType) => ({
  type: OPTIONS_GAME_TYPE,
  gameType,
});
