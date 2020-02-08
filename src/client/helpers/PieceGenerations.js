import {I, O, T, S, Z, L, J, BRICKS_I, BRICKS_O, BRICKS_T, BRICKS_S, BRICKS_Z, BRICKS_L, BRICKS_J} from '../constants/piecesConstants.js'
import { STATE_0 } from '../constants/rotateConstants.js';

export const generatePiece = (pieceToCreate) => {
  let newPiece = [];
  switch (pieceToCreate) {
    case I:
      newPiece = generateI();
      return newPiece;
      break;
    case O:
      newPiece = generateO();
      return newPiece;
      break;
    case T:
      newPiece = generateT();
      return newPiece;
      break;
    case S:
      newPiece = generateS();
      return newPiece;
      break;
    case Z:
      newPiece = generateZ();
      return newPiece;
      break;
    case L:
      newPiece = generateL();
      return newPiece;
      break;
    case J:
      newPiece = generateJ();
      return newPiece;
      break;
    default:
      break;
  }
};

export const generateBag = () => {
  let bag = [I, O, T, S, Z, L, J];
  bag = shuffle(bag);
  console.log(bag)
  return(bag)
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

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