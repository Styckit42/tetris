import { expect } from 'chai';
import { calculateOrder, collisionTest, move } from '../../helpers/Movements.js';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../../constants/collisionConstants';
import { RIGHT, LEFT, DOWN } from '../../constants/keyBoardConstants.js';

it('testCalculateOrder', () => {
  const testX1 = 2;
  const testX2 = 4;
  const testY1 = 1;
  const testY2 = 3;
  const response1 = calculateOrder(testX1, testY1);
  const response2 = calculateOrder(testX2, testY2);
  expect(response1).to.equal(12);
  expect(response2).to.equal(34);
});

it('testCollisionTest', () => {
  const width = 10;
  const height = 20;
  const keyCode = 40;
  const wallPiece = [{x: -1, y: 14}, {x: 0, y: 14}, {x: 1, y: 14}, {x: 1, y: 15}];
  const collisionStackPiece = [{x: 1, y: 19}, {x: 2, y: 19}, {x: 3, y: 19}, {x: 3, y: 18}];
  const piece = [{ x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 10 }, { x: 5, y: 11 },];
  const stack = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 }];
  const response1 = collisionTest(piece, stack, width, height, keyCode);
  const response2 = collisionTest(wallPiece, stack, width, height, keyCode);
  const response3 = collisionTest(collisionStackPiece, stack, width, height, keyCode);
  expect(response1).to.equal(NO_COLLISION);
  expect(response2).to.equal(COLLISION_WALL);
  expect(response3).to.equal(COLLISION_STACK);
});

it('testMove', () => {
  const direction1 = RIGHT;
  const direction2 = LEFT;
  const direction3 = DOWN;
  const piece = [{ x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 10 }, { x: 5, y: 11 },];
  const response1 = move(piece, direction1);
  const response2 = move(piece, direction2);
  const response3 = move(piece, direction3);
  expect(JSON.stringify(response1)).to.equal(JSON.stringify([{x: 4, y: 10}, {x: 5, y: 10}, {x: 6, y: 10}, {x: 6, y: 11}]));
  expect(JSON.stringify(response2)).to.equal(JSON.stringify([{x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 10}, {x: 4, y: 11}]));
  expect(JSON.stringify(response3)).to.equal(JSON.stringify([{x: 3, y: 11}, {x: 4, y: 11}, {x: 5, y: 11}, {x: 5, y: 12}]));
});
