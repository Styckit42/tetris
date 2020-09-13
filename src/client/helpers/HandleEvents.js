import _ from 'lodash';
import LineFuncs from './Line';
import MovementsFuncs from './Movements';
import RotateFuncs from './Rotate';
import {
  LEFT, RIGHT, UP, DOWN, SPACE, /* ESC , */
} from '../constants/keyBoardConstants';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../constants/collisionConstants';
import { I } from '../constants/piecesConstants';
import { WALLKICK_DEFAULT, WALLKICK_I } from '../constants/rotateConstants';
import { GAME_OVER } from '../constants/statusConstants';
import GameOverFuncs from './GameOver';
import { increaseNextPieceIndex, giveLinesToOpponents } from './SocketEmit';

const handleRotate = (props, width, height) => {
  const { piece, stack, savePiece } = props;
  let pieceTmp = _.cloneDeep(piece);
  pieceTmp = RotateFuncs.rotate(pieceTmp);
  const wallKick = (pieceTmp.type === I) ? WALLKICK_I[piece.state] : WALLKICK_DEFAULT[piece.state];
  for (let i = 0; i < wallKick.length; i++) {
    // element = tout un state d un wallKick
    const element = wallKick[i];
    pieceTmp = RotateFuncs.applyWallKick(element, pieceTmp);
    const collision = MovementsFuncs.collisionTest(pieceTmp.bricks, stack, width, height);
    if (collision === NO_COLLISION) {
      savePiece(pieceTmp);
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
    saveLinesBeingErased, nextPiece,
  } = props;
  if (piece === null) {
    return false;
  }
  const pieceTmp = _.cloneDeep(piece);
  pieceTmp.bricks = MovementsFuncs.move(piece.bricks, keyCode, stack);
  const collision = MovementsFuncs.collisionTest(pieceTmp.bricks, stack, width, height, keyCode);
  switch (collision) {
    case COLLISION_STACK:
      if (GameOverFuncs.gameOverCheck(piece.bricks, stack)) {
        saveGameState(GAME_OVER);
        return false;
      }
      let stackTmp = [...stack, ...piece.bricks];
      stackTmp = LineFuncs.eraseLineCheck(piece.bricks, stackTmp, score, saveScore,
        levels, linesErased, saveLevels, saveLinesErased, saveSpeed, linesBeingErased, saveLinesBeingErased);
      saveStack(stackTmp);
      const stackHigh = GameOverFuncs.isStackHigh(stackTmp);
      increaseNextPieceIndex(stackTmp, stackHigh, score);
      return false;
    case COLLISION_WALL:
      return false;
    case NO_COLLISION:
      savePiece(pieceTmp);
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
