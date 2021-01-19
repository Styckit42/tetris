import _ from 'lodash';
import { eraseLineCheck } from './Line';
import { collisionTest, move } from './Movements';
import { rotate, applyWallKick } from './Rotate';
import {
  LEFT, RIGHT, UP, DOWN, SPACE, /* ESC , */
} from '../constants/keyBoardConstants';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../constants/collisionConstants';
import { I } from '../constants/piecesConstants';
import { WALLKICK_DEFAULT, WALLKICK_I } from '../constants/rotateConstants';
import { GAME_OVER } from '../constants/statusConstants';
import { gameOverCheck, isStackHigh } from './GameOver';
import { increaseNextPieceIndex, giveLinesToOpponents } from './SocketEmit';
import {saveShadowPieceAction} from "../actions/save";

const handleRotate = (props, width, height) => {
  const { piece, stack, savePiece, saveShadowPiece } = props;
  let pieceTmp = _.cloneDeep(piece);
  pieceTmp = rotate(pieceTmp);
  const wallKick = (pieceTmp.type === I) ? WALLKICK_I[piece.state] : WALLKICK_DEFAULT[piece.state];
  for (let i = 0; i < wallKick.length; i++) {
    const element = wallKick[i];
    pieceTmp = applyWallKick(element, pieceTmp);
    const collision = collisionTest(pieceTmp.bricks, stack, width, height);
    if (collision === NO_COLLISION) {
      savePiece(pieceTmp);
      saveShadowPiece(null);
      return;
    }
  }
};

const handleMove = (keyCode, props, width, height, piece) => {
  const {
    stack, score, opponentList,
    levels, linesErased, saveGameState,
    savePiece, saveStack, saveScore, saveLevels,
    saveLinesErased, saveSpeed, linesBeingErased,
    saveLinesBeingErased, saveShadowPiece, getNextPieceFromServer,
  } = props;
  if (piece === null) {
    return false;
  }
  const pieceTmp = _.cloneDeep(piece);
  pieceTmp.bricks = move(piece.bricks, keyCode, stack);
  const collision = collisionTest(pieceTmp.bricks, stack, width, height, keyCode);
  switch (collision) {
    case COLLISION_STACK:
      if (gameOverCheck(piece.bricks)) {
        saveGameState(GAME_OVER);
        return false;
      }
      let stackTmp = [...stack, ...piece.bricks];
      stackTmp = eraseLineCheck(piece.bricks, stackTmp, score, saveScore,
        levels, linesErased, saveLevels, saveLinesErased, saveSpeed,
        saveLinesBeingErased, opponentList, width, height);
      savePiece(null);
      saveShadowPiece(null);
      saveStack(stackTmp);
      const stackHigh = isStackHigh(stackTmp);
      getNextPieceFromServer(stackTmp, stackHigh, score);
      return false;
    case COLLISION_WALL:
      return false;
    case NO_COLLISION:
      savePiece(pieceTmp);
      saveShadowPiece(null);
      return pieceTmp;
    default:
  }
  return false;
};

// hub mouvements
const handleOnKeyDown = ({ keyCode }, props, width, height) => {
  if (keyCode === SPACE) {
    let pieceTmp = props.piece;
    while (pieceTmp !== false) {
      pieceTmp = handleMove(DOWN, props, width, height, pieceTmp);
    }
  } else if (keyCode === LEFT || keyCode === RIGHT || keyCode === DOWN) {
    handleMove(keyCode, props, width, height, props.piece);
  } else if (keyCode === UP) {
    handleRotate(props, width, height);
  } /* else if (keyCode === ESC) {
    handlePause();
  } */
};

export default handleOnKeyDown;
