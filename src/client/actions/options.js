import {
  SAVE_GAME_OPTIONS,
} from '../constants/optionsConstants';

export const saveGameOptionsAction = (gameOptions) => ({
  type: SAVE_GAME_OPTIONS,
  gameOptions,
});
