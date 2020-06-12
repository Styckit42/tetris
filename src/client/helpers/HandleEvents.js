import _ from 'lodash';
import { rotate, applyWallKick } from './Rotate';
import { generatePiece, generateBag } from './PieceGenerations';
import eraseLineCheck from './Line';
import { move, collisionTest } from './Movements';
import {
  LEFT, RIGHT, UP, DOWN, SPACE, /* ESC , */
} from '../constants/keyBoardConstants';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../constants/collisionConstants';
import { I } from '../constants/piecesConstants';
import { WALLKICK_DEFAULT, WALLKICK_I } from '../constants/rotateConstants';
import { GAME_OVER } from '../constants/statusConstants';
import { isStackHigh, gameOverCheck } from './GameOver';

const handleRotate = (props, width, height) => {
  const { piece, stack, savePiece } = props;
  let pieceTmp = _.cloneDeep(piece);
  pieceTmp = rotate(pieceTmp);
  const wallKick = (pieceTmp.type === I) ? WALLKICK_I[piece.state] : WALLKICK_DEFAULT[piece.state];
  for (let i = 0; i < wallKick.length; i++) {
    // element = tout un state d un wallKick
    const element = wallKick[i];
    pieceTmp = applyWallKick(element, pieceTmp);
    const collision = collisionTest(pieceTmp.bricks, stack, width, height);
    if (collision === NO_COLLISION) {
      savePiece(pieceTmp);
      return;
    }
  }
};

const reGenPiece = (stackHigh, bag, savePiece, saveBag) => {
  if (stackHigh === true) {
    const piece = generatePiece(bag[0]);
    piece.bricks.forEach((brick) => {
      brick.y -= 1;
    });
    savePiece(piece);
  } else {
    savePiece(generatePiece(bag[0]));
  }
  bag.shift();
  if (bag.length === 0) {
    bag = generateBag();
  }
  saveBag(_.cloneDeep(bag));
};

const handleMove = (keyCode, props, width, height, piece) => {
  const {
    stack, score,
    levels, linesErased, saveGameState,
    savePiece, saveStack, saveScore, saveLevels,
    saveLinesErased, saveBag, saveSpeed,
  } = props;
  const { bag } = props;
  const pieceTmp = _.cloneDeep(piece);
  pieceTmp.bricks = move(piece.bricks, keyCode, stack);
  const collision = collisionTest(pieceTmp.bricks, stack, width, height, keyCode);
  switch (collision) {
    case COLLISION_STACK:
      if (gameOverCheck(piece.bricks, stack)) {
        saveGameState(GAME_OVER);
        return false;
      }
      let stackTmp = [...stack, ...piece.bricks];
      stackTmp = eraseLineCheck(piece.bricks, stackTmp, score, saveScore,
        levels, linesErased, saveLevels, saveLinesErased, saveSpeed);
      saveStack(stackTmp);
      const stackHigh = isStackHigh(stackTmp);
      reGenPiece(stackHigh, bag, savePiece, saveBag);
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
