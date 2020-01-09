import {I, O, T, S, Z, L, J, BRICKS_I, BRICKS_O, BRICKS_T, BRICKS_S, BRICKS_Z, BRICKS_L, BRICKS_J} from '../constants/piecesConstants.js'
import { STATE_0 } from '../constants/rotateConstants.js';

export const generatePiece = () => {
  const pieceToCreate = getRandomInt(7);
  let newPiece = [];
  switch (pieceToCreate) {
    case 0:
      newPiece = generateI();
      return newPiece;
      break;
    case 1:
      newPiece = generateO();
      return newPiece;
      break;
    case 2:
      newPiece = generateT();
      return newPiece;
      break;
    case 3:
      newPiece = generateS();
      return newPiece;
      break;
    case 4:
      newPiece = generateZ();
      return newPiece;
      break;
    case 5:
      newPiece = generateL();
      return newPiece;
      break;
    case 6:
      newPiece = generateJ();
      return newPiece;
      break;
    default:
      break;
  }
};
  
const getRandomInt= (max) => {
    return Math.floor(Math.random() * Math.floor(max));	
};
  
const generateI = () => (
  {
    type: I,
    state: STATE_0,
    bricks: BRICKS_I,
    hasBeenPlayes: false
  }
);
  
const generateO = () => (
  {
    type: O,
    state: STATE_0,
    bricks: BRICKS_O,
    hasBeenPlayes: false
  }
);
  
const generateT = () => (
  {
    type: T,
    state: STATE_0,
    bricks: BRICKS_T,
    hasBeenPlayes: false
  }
);

const generateS = () => (
  {
    type: S,
    state: STATE_0,
    bricks: BRICKS_S,
    hasBeenPlayes: false
  }
);

const generateZ = () => (
  {
    type: Z,
    state: STATE_0,
    bricks: BRICKS_Z,
    hasBeenPlayes: false
  }
);

const generateL = () => (
  {
    type: L,
    state: STATE_0,
    bricks: BRICKS_L,
    hasBeenPlayes: false
  }
);

const generateJ = () => (
  {
    type: J,
    state: STATE_0,
    bricks: BRICKS_J,
    hasBeenPlayes: false
  }
);