import {move} from '../helpers/Movements.js'
import {DOWN} from '../constants/keyBoardConstants.js'
import {saveScoreAction, saveLevelsAction, saveLinesErasedAction} from '../actions/save.js'
import {connect} from 'react-redux'
import { $CombinedState } from 'redux';

const eraseLine = (brick, y) => {
  if (brick.y !== y) {
    return brick;
  }
};

const levelUp = (levels, linesErased, linesNumber, saveLevels, saveLinesErased) => {
  console.log("dans lvl up")
  linesErased += linesNumber;
  if (linesErased >= 10) {
    linesErased = linesErased % 10;
    levels += 1;
    saveLevels(levels);
  }
  saveLinesErased(linesErased);
}

const calculateScore = (linesNumber, levelDifficulty) => {
  let scoreToAdd = 0
  if (linesNumber === 1) {
    scoreToAdd = levelDifficulty * 40;
  }
  else if (linesNumber === 2) {
    scoreToAdd = levelDifficulty * 100;
  }
  else if (linesNumber === 3) {
    scoreToAdd = levelDifficulty * 300;
  }
  else if (linesNumber === 4) {
    scoreToAdd = levelDifficulty * 1200;
  }
  return scoreToAdd
};

export const eraseLineCheck = (bricks, stack, score, saveScore, levels, linesErased, saveLevels, saveLinesErased) => {
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
  const scoreToAdd = calculateScore(yErased.length, levels);
  score += scoreToAdd;
  saveScore(score);
  levelUp(levels, linesErased, yErased.length, saveLevels, saveLinesErased);
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

/**
 * eraseLineCheck (function use to check if lines needs to be erased or not)
 * param : bricks (object)
 *         stack (object)
 *         score (number)
 * return : newStack (object, with the lines erased if needed)
 */

const mapDispatchToProps = (dispatch) => {
	return {
		saveScore: score => {
      dispatch(saveScoreAction(score))
    },
    /*saveLevels: levels => {
      dispatch(saveLevelsAction(levels))
    },
    saveLinesErased: linesErasedInCurrentLevel => {
      dispatch(saveLinesErasedAction(linesErasedInCurrentLevel))
    },*/
	}
}

export default connect(null, mapDispatchToProps)(eraseLineCheck)