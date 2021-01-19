import _ from 'lodash';
import {
  LEFT, RIGHT, DOWN, SPACE,
} from '../constants/keyBoardConstants';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../constants/collisionConstants';

export const move = (piece, direction) => {
  const pieceTmp = _.cloneDeep(piece);
  switch (direction) {
    case LEFT:
      return pieceTmp.map(
        (brick) => {
          brick.x -= 1;
          return brick;
        },
      );
    case RIGHT:
      return pieceTmp.map(
        (brick) => {
          brick.x += 1;
          return brick;
        },
      );
    case DOWN:
      return pieceTmp.map(
        (brick) => {
          brick.y += 1;
          return brick;
        },
      );
    default:
  }
  return false;
};

export const calculateOrder = (x, y) => (x + y * 10);

export const collisionTest = (piece, stack, width, height, keyCode) => {
  for (let i = 0; i < piece.length; i++) {
    const brick = piece[i];
    const find = stack.find(
      (brickStack) => {
        if (brick.x === brickStack.x && brick.y === brickStack.y) {
          return true;
        }
        return false;
      },
    );
    if (typeof find !== 'undefined' || brick.y >= height) {
      return (keyCode === DOWN || keyCode === SPACE) ? COLLISION_STACK : COLLISION_WALL;
    }
    if (brick.x < 0 || brick.x >= width) {
      return COLLISION_WALL;
    }
  }
  return NO_COLLISION;
};
