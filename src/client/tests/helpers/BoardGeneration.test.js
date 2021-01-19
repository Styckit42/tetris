import { expect } from 'chai';
import {filterPieces, filterBoard, generateBoard, calculateSpectreStack, findHighStack} from '../../helpers/BoardGeneration.js';
import { stackTest, boardTest, pieceTest, widthTest, heightTest } from "../VariablesTest";

it('testFilterPieces', () => {
  const brickBoard = { x: 3, y: 16};
  const pieceTrue = [
    { x: 2, y: 18 }, { x: 3, y: 18 },
    { x: 3, y: 17 }, { x: 4, y: 18 },
  ];
  const stackTrue = [
    { x: 2, y: 18 }, { x: 3, y: 18 },
    { x: 3, y: 17 }, { x: 4, y: 18 },
  ];
  const pieceFalse = [
    { x: 2, y: 17 }, { x: 3, y: 17 },
    { x: 3, y: 16 }, { x: 4, y: 17 },
  ];
  const stackFalse = [
    { x: 2, y: 17 }, { x: 3, y: 17 },
    { x: 3, y: 16 }, { x: 4, y: 17 },
  ];
  const responseTrue = filterPieces(brickBoard, pieceTrue, stackTrue);
  const responseFalse = filterPieces(brickBoard, pieceFalse, stackFalse);
  expect(responseTrue).to.equal(true);
  expect(responseFalse).to.equal(false);
});

it('testGenerateBoard', () => {
  let response = [];
  response = generateBoard(widthTest, heightTest);
  expect(response.length).to.equal(200);
});

it('testFilterBoard', () => {
  const response = filterBoard(boardTest, pieceTest, stackTest);
  expect(response.length).to.equal(200 - (pieceTest.length + stackTest.length));
});

it('testCalculateSpectreStack', () => {
  const width = 10;
  const height = 20;
  const stack = [{ x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 }, { x: 4, y: 19 },
    { x: 5, y: 19 }, { x: 1, y: 18 }, { x: 2, y: 18 }, { x: 2, y: 17 }];
  const response = calculateSpectreStack(stack, width, height);
  const expected = [
    { x: 1, y: 18, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 1, y: 19, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 2, y: 17, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 2, y: 18, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 2, y: 19, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 3, y: 19, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 4, y: 19, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
    { x: 5, y: 19, color: 'rgba(255, 255, 255, 0.5)', isSpectre: true },
  ];
  expect(JSON.stringify(response)).to.equal(JSON.stringify(expected));
});
