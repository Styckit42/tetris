import { expect } from 'chai';
import { stackTest } from '../VariablesTest.js';
import { fillYToCheck, eraseLine, fillYErased, calculateScore, levelUp, speedUp } from '../../helpers/Line.js'
import {calculateNewStack, eraseLineCheck} from "../../helpers/Line";

it('testFillYToCheck', () => {
  let tab = [];
  const bricks = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 2, y: 2},
  ];
  tab = fillYToCheck(bricks);
  expect(tab.length).to.equal(3);
});

it('testFillYErased', () => {
  let tab = [];
  const stack1 = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 },
    { x: 4, y: 19 }, { x: 5, y: 19 }, { x: 6, y: 19 }, { x: 7, y: 19 }, { x: 8, y: 19 },
    { x: 9, y: 19 }, { x: 1, y: 18 }, { x: 2, y: 18 }, { x: 2, y: 17 }];
  const yToCheck = [17, 18, 19];
  tab = fillYErased(yToCheck, stack1);
  const comparaison = [19];
  expect(JSON.stringify(tab)).to.equal(JSON.stringify(comparaison));
});

it('testCalculateNewStack', () => {
  let response = [];
  const stack1 = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 },
    { x: 4, y: 19 }, { x: 5, y: 19 }, { x: 6, y: 19 }, { x: 7, y: 19 }, { x: 8, y: 19 },
    { x: 9, y: 19 }, { x: 1, y: 18 }, { x: 2, y: 18 }, { x: 2, y: 17 }];
  const yErased = [19];
  response = calculateNewStack(stack1, yErased);
  expect(JSON.stringify(response)).to.equal(JSON.stringify([{ x: 1, y: 18 }, { x: 2, y: 18 }, { x: 2, y: 17 }]))
});

it('testEraseLine', () => {
  const brickTest1 = { x:12, y: 0 };
  const brickTest2 ={ x:0, y: 3};
  const yTest = 0;
  const response1 = eraseLine(brickTest1, yTest);
  const response2 = eraseLine(brickTest2, yTest);
  expect(response1).to.equal(false);
  expect(response2).to.equal(brickTest2);
});

it('testLevelUp', () => {
  const saveLinesErasedMock = jest.fn((x) => true);
  const saveLevelsMock = jest.fn((x) => true);
  const saveSpeedMock = jest.fn((x) => true);
  levelUp(4, 2, 8, saveLevelsMock, saveLinesErasedMock, saveSpeedMock);
  levelUp(4, 3, 4, saveLevelsMock, saveLinesErasedMock, saveSpeedMock);
  expect(saveLinesErasedMock.mock.calls.length).to.equal(2);
  expect(saveLevelsMock.mock.calls.length).to.equal(1);
});

it('testSpeedUp', () => {
  const saveSpeedMock = jest.fn((x) => true);
  speedUp(5, saveSpeedMock);
  speedUp(40, saveSpeedMock);
  expect(saveSpeedMock.mock.calls.length).to.equal(2);
  expect(saveSpeedMock.mock.calls[0][0]).to.equal(800);
  expect(saveSpeedMock.mock.calls[1][0]).to.equal(50);
});

it('testCalculateScore', () => {
  const linesNumber1 = 1;
  const levelDifficulty1 = 1;
  const linesNumber2 = 3;
  const levelDifficulty2 = 5;
  const linesNumber3 = 2;
  const levelDifficulty3 = 3;
  const linesNumber4 = 4;
  const levelDifficulty4 = 8;
  const response1 = calculateScore(linesNumber1, levelDifficulty1);
  const response2 = calculateScore(linesNumber2, levelDifficulty2);
  const response3 = calculateScore(linesNumber3, levelDifficulty3);
  const response4 = calculateScore(linesNumber4, levelDifficulty4);
  expect(response1).to.equal(levelDifficulty1 * 40);
  expect(response2).to.equal(levelDifficulty2 * 300);
  expect(response3).to.equal(levelDifficulty3 * 100);
  expect(response4).to.equal(levelDifficulty4 * 1200);
});

it('testEraseLineCheck', () => {
  const bricks = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 2, y: 2},
  ];
  const stack1 = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 },
    { x: 4, y: 19 }, { x: 5, y: 19 }, { x: 6, y: 19 }, { x: 7, y: 19 }, { x: 8, y: 19 },
    { x: 9, y: 19 }, { x: 1, y: 18 }, { x: 2, y: 18 }, { x: 2, y: 17 }];
  const saveLinesErasedMock = jest.fn((x) => true);
  const saveLevelsMock = jest.fn((x) => true);
  const saveSpeedMock = jest.fn((x) => true);
  const saveScoreMock = jest.fn((x) => true);
  const saveLinesBeingErasedMock = jest.fn((x) => true);
  eraseLineCheck(bricks, stack1, 1000, saveScoreMock, 5, 1,
    saveLevelsMock, saveLinesErasedMock, saveSpeedMock, saveLinesBeingErasedMock,
    null, null);

});
