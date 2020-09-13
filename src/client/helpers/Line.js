import _ from 'lodash';
import { giveLinesToOpponents } from './SocketEmit';

const fillYToCheck = (bricks) => {
  const tab = [];
  bricks.forEach((brick) => {
    if (!tab.includes(brick.y)) {
      tab.push(brick.y);
    }
  });
  return tab;
};

const fillYErased = (yToCheck, stack) => {
  const tab = [];
  for (let i = 0; i < yToCheck.length; i++) {
    const bricksEraseCheck = [];
    stack.forEach((brick) => {
      if (brick.y === yToCheck[i] && !bricksEraseCheck.includes(brick.x)) {
        bricksEraseCheck.push(brick.x);
      }
    });
    if (bricksEraseCheck.length === 10) {
      tab.push(yToCheck[i]);
    }
  }
  return tab;
};

const calculateNewStack = (stack, yErased) => {
  let newStack = _.cloneDeep(stack);
  for (let i = 0; i < yErased.length; i++) {
    newStack = newStack.filter((brick) => eraseLine(brick, yErased[i]));
  }
  if (yErased.length === 0) {
    return newStack;
  }
  return newStack;
};

const eraseLine = (brick, y) => {
  if (brick.y !== y) {
    return brick;
  }
  return false;
};

const levelUp = (levels, linesErased, linesNumber, saveLevels, saveLinesErased, saveSpeed) => {
  linesErased += linesNumber;
  if (linesErased >= 10 && levels <= 18) {
    linesErased %= 10;
    levels += 1;
    saveLevels(levels);
    let newSpeed = 1050 - (levels * 50);
    if (newSpeed < 50) {
      newSpeed = 50;
    }
    saveSpeed(newSpeed);
  }
  saveLinesErased(linesErased);
};

const calculateScore = (linesNumber, levelDifficulty) => {
  let scoreToAdd = 0;
  if (linesNumber === 1) {
    scoreToAdd = levelDifficulty * 40;
  } else if (linesNumber === 2) {
    scoreToAdd = levelDifficulty * 100;
  } else if (linesNumber === 3) {
    scoreToAdd = levelDifficulty * 300;
  } else if (linesNumber === 4) {
    scoreToAdd = levelDifficulty * 1200;
  }
  return scoreToAdd;
};

const jeSaisPasFunction = (newStack, yErased) => {
  yErased.reverse();
  const toto = [];
  toto[0] = [];
  let j = 0;
  for (let i = 0; i < yErased.length; i++) {
    toto[j].push(yErased[i]);
    if (i + 1 < yErased.length && yErased[i] - yErased[i + 1] > 1) {
      j++;
      toto[j] = [];
    }
  }
  let titi = 0;
  for (let i = 0; i < toto.length; i++) {
    let min = Math.min.apply(Math, toto[i]);
    min += titi;
    newStack.map(
      (brick) => {
        if (brick.y < min) {
          brick.y += toto[i].length;
        }
        return brick;
      },
    );
    titi += toto[i].length;
  }
  return newStack;
};

/* eslint-disable no-restricted-syntax, prefer-spread */
let eraseLineCheck = (
  bricks, stack, score, saveScore, levels, linesErased, saveLevels,
  saveLinesErased, saveSpeed, linesBeingErased, saveLinesBeingErased,
) => {
  // yToCheck sert a isoler les lignes à analyser
  const yToCheck = fillYToCheck(bricks);
  // yErased sert a isoler les lignes pleines depuis yToCheck
  const yErased = fillYErased(yToCheck, stack);
  saveLinesBeingErased(yErased.length);
  score += calculateScore(yErased.length, levels);
  saveScore(score);
  levelUp(levels, linesErased, yErased.length, saveLevels, saveLinesErased, saveSpeed);
  // newStack = la stack apres les lignes effacé
  let newStack = calculateNewStack(stack, yErased)
  giveLinesToOpponents(yErased.length);
  newStack = jeSaisPasFunction(newStack, yErased);
  return newStack;
};

const exportFunctions = {
  eraseLineCheck,
};

export default exportFunctions;
