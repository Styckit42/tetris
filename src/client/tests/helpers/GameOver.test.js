import { expect } from 'chai';
import { gameOverCheck, isStackHigh } from '../../helpers/GameOver.js';

it('testGameOverCheck', () => {
  const brickTestTrue = [
    { y: 0 },
    { y: -1},
    { y: -1},
    { y: 0},
  ];
  const brickTestFalse = [
    {y: 0},
    {y: 5},
    {y: 4},
    {y: 18},
  ];
  const responseTrue = gameOverCheck(brickTestTrue);
  const responseFalse = gameOverCheck(brickTestFalse);
  expect(responseTrue).to.equal(true);
  expect(responseFalse).to.equal(false);
});

it('testIsStackHigh', () => {
  const stackTestTrue = [
    { x: 3, y: 1},
    { x: 2, y: 1},
    { x: 4, y: 1},
    { x: 5, y: 1},
  ];
  const stackTestFalse = [
    { x: 2, y: 1},
    { x: 2, y: 2},
    { x: 3, y: 2},
    { x: 3, y: 3},
  ];
  const responseTrue = isStackHigh(stackTestTrue);
  const responseFalse = isStackHigh(stackTestFalse);
  expect(responseTrue).to.equal(true);
  expect(responseFalse).to.equal(false);
});