import { expect } from 'chai';
import helpers from '../../helpers/Movements.js';
import { stackTest, pieceTest, widthTest, heightTest } from '../VariablesTest.js';
import { COLLISION_STACK, COLLISION_WALL, NO_COLLISION } from '../../constants/collisionConstants';
import { RIGHT, LEFT, DOWN } from '../../constants/keyBoardConstants.js';

it('testCalculateOrder', () => {
  const testX1 = 2;
  const testX2 = 4;
  const testY1 = 1;
  const testY2 = 3;
  const response1 = helpers.calculateOrder(testX1, testY1);
  const response2 = helpers.calculateOrder(testX2, testY2);
  expect(response1).to.equal(12);
  expect(response2).to.equal(34);
});

it('testCollisionTest', () => {
  const keyCode = 40;
  const wallPiece = [{x: -1, y: 14}, {x: 0, y: 14}, {x: 1, y: 14}, {x: 1, y: 15}];
  const collisionStackPiece = [{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 3, y: 4}];
  const response1 = helpers.collisionTest(pieceTest, stackTest, widthTest, heightTest, keyCode);
  const response2 = helpers.collisionTest(wallPiece, stackTest, widthTest, heightTest, keyCode);
  const response3 = helpers.collisionTest(collisionStackPiece, stackTest, widthTest, heightTest, keyCode);
  expect(response1).to.equal(NO_COLLISION);
  expect(response2).to.equal(COLLISION_WALL);
  expect(response3).to.equal(COLLISION_STACK);
});

it('testMove', () => {
  const direction1 = RIGHT;
  const direction2 = LEFT;
  const direction3 = DOWN;
  const response1 = helpers.move(pieceTest, direction1);
  const response2 = helpers.move(pieceTest, direction2);
  const response3 = helpers.move(pieceTest, direction3);
  expect(JSON.stringify(response1)).to.equal(JSON.stringify([{x: 4, y: 16}, {x: 5, y: 16}, {x: 6, y: 16}, {x: 6, y: 17}]));
  expect(JSON.stringify(response2)).to.equal(JSON.stringify([{x: 2, y: 16}, {x: 3, y: 16}, {x: 4, y: 16}, {x: 4, y: 17}]));
  expect(JSON.stringify(response3)).to.equal(JSON.stringify([{x: 3, y: 17}, {x: 4, y: 17}, {x: 5, y: 17}, {x: 5, y: 18}]));
});