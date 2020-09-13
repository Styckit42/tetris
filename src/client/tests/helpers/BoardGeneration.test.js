import { expect } from 'chai';
import helpers from '../../helpers/BoardGeneration.js';

it('testFilterPieces', () => {
  const brickBoard = { x: 3, y: 16};
  const pieceTrue = [
    { x: 2, y: 18 },
    { x: 3, y: 18},
    { x: 3, y: 17},
    { x: 4, y: 18},
  ];
  const stackTrue = [
    { x: 2, y: 18 },
    { x: 3, y: 18},
    { x: 3, y: 17},
    { x: 4, y: 18},
  ];
  const pieceFalse = [
    { x: 2, y: 17 },
    { x: 3, y: 17},
    { x: 3, y: 16},
    { x: 4, y: 17},
  ];
  const stackFalse = [
    { x: 2, y: 17 },
    { x: 3, y: 17},
    { x: 3, y: 16},
    { x: 4, y: 17},
  ];
  const responseTrue = helpers.filterPieces(brickBoard, pieceTrue, stackTrue);
  const responseFalse = helpers.filterPieces(brickBoard, pieceFalse, stackFalse);
  expect(responseTrue).to.equal(true);
  expect(responseFalse).to.equal(false);
});

it('testGenerateBoard', () => {
  let boardTest = [];
  const width = 10;
  const height = 20;
  boardTest = helpers.generateBoard(width, height);
  expect(boardTest.length).to.equal(200);
});

it('testFilterBoard', () => {
  const board = [
    { x: 0, y: 0},
    { x: 0, y: 1},
    { x: 0, y: 2},
    { x: 0, y: 3},
  ];
  helpers.filterPieces = jest.fn();
  helpers.filterPieces.mockReturnValue(true);
  helpers.filterBoard(board, [], []);
  expect(helpers.filterPieces.mock.calls.length).to.equal(4);
});