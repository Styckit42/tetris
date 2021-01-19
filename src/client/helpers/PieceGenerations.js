import {
  I, O, T, S, Z, L, J, BRICKS_I, BRICKS_O, BRICKS_T, BRICKS_S, BRICKS_Z, BRICKS_L, BRICKS_J,
} from '../constants/piecesConstants';
import { STATE_0 } from '../constants/rotateConstants';
import _ from 'lodash';
import { DOWN } from '../constants/keyBoardConstants';
import {COLLISION_STACK, NO_COLLISION} from '../constants/collisionConstants';
import { collisionTest, move } from './Movements';

const generateI = () => (
  {
    type: I,
    state: STATE_0,
    bricks: BRICKS_I,
  }
);

const generateO = () => (
  {
    type: O,
    state: STATE_0,
    bricks: BRICKS_O,
  }
);

const generateT = () => (
  {
    type: T,
    state: STATE_0,
    bricks: BRICKS_T,
  }
);

const generateS = () => (
  {
    type: S,
    state: STATE_0,
    bricks: BRICKS_S,
  }
);

const generateZ = () => (
  {
    type: Z,
    state: STATE_0,
    bricks: BRICKS_Z,
  }
);

const generateL = () => (
  {
    type: L,
    state: STATE_0,
    bricks: BRICKS_L,
  }
);

const generateJ = () => (
  {
    type: J,
    state: STATE_0,
    bricks: BRICKS_J,
  }
);

let applyBlindColorFilter = (piece) => {
  const pieceTmp = _.cloneDeep(piece);
  for (let i = 0; i < pieceTmp.bricks.length; i++) {
    pieceTmp.bricks[i].color = '#B62536';
  }
  return pieceTmp;
};

export const generatePiece = (pieceToCreate, blindOptions) => {
  let newPiece = [];
  switch (pieceToCreate) {
    case I:
      newPiece = generateI();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case O:
      newPiece = generateO();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case T:
      newPiece = generateT();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case S:
      newPiece = generateS();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case Z:
      newPiece = generateZ();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case L:
      newPiece = generateL();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    case J:
      newPiece = generateJ();
      if (blindOptions === true) {
        newPiece = applyBlindColorFilter(newPiece);
      }
      return newPiece;
    default:
      return null;
  }
};

export const checkPieceAndShadowPos = (shadowPiece, piece) => {
  const find = piece.bricks.find(
    (brickPiece) => {
      for (let i = 0; i < shadowPiece.bricks.length; i++) {
        const shadowBrick = shadowPiece.bricks[i];
        if (shadowBrick.x === brickPiece.x && shadowBrick.y === brickPiece.y) {
          return shadowBrick;
        }
      }
    },
  );
  return find;
};

export const defineShadowPiece = (piece, shadowPiece, stack, saveShadowPiece, width, height) => {
  if (shadowPiece === null && piece !== null) {
    const shadowPiece = _.cloneDeep(piece);
    while (collisionTest(shadowPiece.bricks, stack, width, height, DOWN) === NO_COLLISION) {
      shadowPiece.bricks = move(shadowPiece.bricks, DOWN, stack);
    }
    if (collisionTest(shadowPiece.bricks, stack, width, height, DOWN) === COLLISION_STACK) {
      shadowPiece.bricks = shadowPiece.bricks.map(
        (brick) => {
          brick.y -= 1;
          return brick;
        },
      );
      const rep = checkPieceAndShadowPos(shadowPiece, piece);
      if (typeof rep !== 'undefined') {
        saveShadowPiece(null);
      } else {
        saveShadowPiece(shadowPiece);
      }
    }
  }
};
