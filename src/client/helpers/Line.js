import {move} from '../helpers/Movements.js'
import {DOWN} from '../constants/keyBoardConstants.js'

const eraseLine = (brick, y) => {
  if (brick.y !== y) {
    return brick;
  }
};

export const eraseLineCheck = (bricks, stack) => {
  //yToCheck sert a isoler les lignes à analyser
  const yToCheck = [];
  bricks.forEach(brick => {
    if (!yToCheck.includes(brick.y)) {
      yToCheck.push(brick.y)
    }
  });
  //yErased contiendra la liste des lignes x à delete
  const yErased = [];
  for (let i = 0; i < yToCheck.length; i++) {
    let bricksEraseCheck = [];
    stack.forEach(brick => {
      if (brick.y === yToCheck[i] && !bricksEraseCheck.includes(brick.x)) {
        bricksEraseCheck.push(brick.x);
      }
    });
    if (bricksEraseCheck.length === 10) {
      yErased.push(yToCheck[i]);
    }
  };
  let newStack = stack;
  for (let i = 0; i < yErased.length; i++) {
    newStack = newStack.filter(brick => {
      return eraseLine(brick, yErased[i]);
    });
  }
  for (let i = 0; i < yErased.length; i++) {
      newStack = newStack.map(
      brick => { 
        if (brick.y < yErased[i]) {
          brick.y += 1;
        }
        return brick;
      }
    );
  }
  return newStack;
}