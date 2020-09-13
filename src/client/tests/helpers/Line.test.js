import { expect } from 'chai';
import helpers from '../../helpers/Line.js';
import { stackTest } from '../VariablesTest.js';

it('testFillYToCheck', () => {
  let tab = [];
  const bricks = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 2, y: 2},
  ];
  tab = helpers.fillYToCheck(bricks);
  expect(tab.length).to.equal(3);
});

it('testFillYErased', () => {
  let tab = [];
  const yToCheck = [0, 1, 2];
  tab = helpers.fillYErased(yToCheck, stackTest);
  expect(tab.length).to.equal(1);
});

/*it('testCalculateNewStack', () => {
  let newStack = [];
  const yErased = [1];
  helpers.eraseLine = jest.fn();
});*/

it('testEraseLine', () => {
  const brickTest1 = { x:12, y: 0 };
  const brickTest2 ={ x:0, y: 3};
  const yTest = 0;
  const response1 = helpers.eraseLine(brickTest1, yTest);
  const response2 = helpers.eraseLine(brickTest2, yTest);
  expect(response1).to.equal(false);
  expect(response2).to.equal(brickTest2);
});

/*it('testLevelUp', () => {

});*/


it('testCalculateScore', () => {
  const linesNumber1 = 1;
  const levelDifficulty1 = 1;
  const linesNumber2 = 3;
  const levelDifficulty2 = 5;
  const response1 = helpers.calculateScore(linesNumber1, levelDifficulty1);
  const response2 = helpers.calculateScore(linesNumber2, levelDifficulty2);
  expect(response1).to.equal(levelDifficulty1 * 40);
  expect(response2).to.equal(levelDifficulty2 * 300);
});

/*it('testJeSaisPasFonction, () => {

});*/

/*it('testEraseLineCheck', () => {

});*/