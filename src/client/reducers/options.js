import {
  OPTIONS_LEVEL_START, OPTIONS_BOARD_SIZE, OPTIONS_DALTONIEN, OPTIONS_GAME_TYPE
} from '../constants/optionsConstants';

const optionsReducer = (state = {}, action) => {
  switch (action.type) {
    case OPTIONS_LEVEL_START:
      return {...state, piece: action.piece};
    default:
      return state;
  }
};

export default optionsReducer;
