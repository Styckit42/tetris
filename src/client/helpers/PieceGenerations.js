import {
  I, O, T, S, Z, L, J, BRICKS_I, BRICKS_O, BRICKS_T, BRICKS_S, BRICKS_Z, BRICKS_L, BRICKS_J,
} from '../constants/piecesConstants';
import { STATE_0 } from '../constants/rotateConstants';

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

export const generatePiece = (pieceToCreate) => {
  let newPiece = [];
  switch (pieceToCreate) {
    case I:
      newPiece = generateI();
      return newPiece;
    case O:
      newPiece = generateO();
      return newPiece;
    case T:
      newPiece = generateT();
      return newPiece;
    case S:
      newPiece = generateS();
      return newPiece;
    case Z:
      newPiece = generateZ();
      return newPiece;
    case L:
      newPiece = generateL();
      return newPiece;
    case J:
      newPiece = generateJ();
      return newPiece;
    default:
      return null;
  }
};