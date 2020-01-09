import {LEFT, RIGHT, UP, DOWN, SPACE, ESC} from '../constants/keyBoardConstants.js'
import {COLLISION_STACK, COLLISION_WALL, COLLISION_GAMEOVER, NO_COLLISION} from '../constants/collisionConstants.js'
import _ from 'lodash'

const spaceMove = (piece, stack) => {
  while (collisionTest(piece, stack, 10, 20, SPACE) === NO_COLLISION) {
    console.log(true)
    piece.map(
      brick => {
        brick.y += 1;
        return brick;
      }
    )
  }
  console.log(piece)
  return piece
}

export const move = (piece, direction, stack) => {
  let pieceTmp = _.cloneDeep(piece);
  switch (direction) {
    case LEFT: 
      return pieceTmp.map(
        brick => { 
          brick.x -= 1;
          return brick;
        }
      );
      break;
    case RIGHT: 
      return pieceTmp.map(
        brick => { 
          brick.x += 1;
          return brick;
        }
      );
      break;
    case DOWN: 
      return pieceTmp.map(
        brick => { 
          brick.y += 1;
          return brick;
        }
      );
      break;
    case SPACE:
      pieceTmp = (spaceMove(pieceTmp, stack))
      return pieceTmp
      break;
    default:
      break;
  }
};

export const calculateOrder = (x, y) => (x + y * 10);

const gameOverCheck = (piece, stack) => {
	for (let i = 0; i < piece.length; i++) {
		const brickPiece = piece[i];
		for (let j = 0; j < stack.length; j++) {
			const brickStack = stack[j];
			if (brickPiece.x === brickStack.x && brickPiece.y === brickStack.y) {
				return true;
			}
		}
	}
	return false;
}

export const collisionTest = (piece, stack, width, height, keyCode) => {
  /*if (pieceTmp.hasBennPlayed === false && gameOverCheck(pieceTmp, stack) === true) {
    return COLLISION_GAMEOVER;
  }*/
  console.log(piece.length)
  for (let i = 0; i < piece.length; i++) {
    let brick = piece[i];
    const find = stack.find(
      brickStack => {
        if (brick.x === brickStack.x && brick.y === brickStack.y) {
          return true;
        }
          return false;
        }
      );
      if (typeof find !== 'undefined' || brick.y >= height) {
        return (keyCode === DOWN) ? COLLISION_STACK : COLLISION_WALL; //collision avec stack trouvé
      }
      /*if (brick.y < 0) {
        return COLLISION_GAMEOVER;
      }*/
      if (brick.x < 0 || brick.x >= width) {
        return COLLISION_WALL; //collision avec coté trouvé
      }
  }
  return NO_COLLISION;
};