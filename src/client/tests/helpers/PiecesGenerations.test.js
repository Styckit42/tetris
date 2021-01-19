import { expect } from 'chai';
import {checkPieceAndShadowPos, defineShadowPiece, generatePiece} from "../../helpers/PieceGenerations";
import {
  I, O, T, S, Z, L, J, BRICKS_I, BRICKS_O, BRICKS_T, BRICKS_S, BRICKS_Z, BRICKS_L, BRICKS_J,
} from '../../constants/piecesConstants';

it('testGeneratePieceITrue', () => {
  const responseITrue = generatePiece(I, true);
  const expectedITrue = { type: 'I', state: 'STATE_0',
    bricks: [{ x: 3, y: 1, color: '#B62536' }, { x: 4, y: 1, color: '#B62536' },
      { x: 5, y: 1, color: '#B62536' }, { x: 6, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseITrue)).to.equal(JSON.stringify(expectedITrue));
  const responseIFalse = generatePiece(I, false);
  const expectedIFalse = { type: 'I', state: 'STATE_0',
    bricks: [{ x: 3, y: 1, color: '#E23396' }, { x: 4, y: 1, color: '#E23396' },
      { x: 5, y: 1, color: '#E23396' }, { x: 6, y: 1, color: '#E23396' }]};
  expect(JSON.stringify(responseIFalse)).to.equal(JSON.stringify(expectedIFalse));

  const responseOTrue = generatePiece(O, true);
  const expectedOTrue = {type: 'O', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#B62536' }, { x: 5, y: 0, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseOTrue)).to.equal(JSON.stringify(expectedOTrue));

  const responseOFalse = generatePiece(O, false);
  const expectedOFalse = {type: 'O', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#D3FF00' }, { x: 5, y: 0, color: '#D3FF00' },
      { x: 4, y: 1, color: '#D3FF00' }, { x: 5, y: 1, color: '#D3FF00' }]};
  expect(JSON.stringify(responseOFalse)).to.equal(JSON.stringify(expectedOFalse));

  const responseTTrue = generatePiece(T, true);
  const expectedTTrue = {type: 'T', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#B62536' }, { x: 3, y: 1, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseTTrue)).to.equal(JSON.stringify(expectedTTrue));

  const responseTFalse = generatePiece(T, false);
  const expectedTFalse = {type: 'T', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#4D33E2' }, { x: 3, y: 1, color: '#4D33E2' },
      { x: 4, y: 1, color: '#4D33E2' }, { x: 5, y: 1, color: '#4D33E2' }]};
  expect(JSON.stringify(responseTFalse)).to.equal(JSON.stringify(expectedTFalse));

  const responseSTrue = generatePiece(S, true);
  const expectedSTrue = {type: 'S', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#B62536' }, { x: 5, y: 0, color: '#B62536' },
      { x: 3, y: 1, color: '#B62536' }, { x: 4, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseSTrue)).to.equal(JSON.stringify(expectedSTrue));

  const responseSFalse = generatePiece(S, false);
  const expectedSFalse = {type: 'S', state: 'STATE_0',
    bricks: [{ x: 4, y: 0, color: '#28D4AA' }, { x: 5, y: 0, color: '#28D4AA' },
      { x: 3, y: 1, color: '#28D4AA' }, { x: 4, y: 1, color: '#28D4AA' }]};
  expect(JSON.stringify(responseSFalse)).to.equal(JSON.stringify(expectedSFalse));

  const responseZTrue = generatePiece(Z, true);
  const expectedZTrue = {type: 'Z', state: 'STATE_0',
    bricks: [{ x: 3, y: 0, color: '#B62536' }, { x: 4, y: 0, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseZTrue)).to.equal(JSON.stringify(expectedZTrue));

  const responseZFalse = generatePiece(Z, false);
  const expectedZFalse = {type: 'Z', state: 'STATE_0',
    bricks: [{ x: 3, y: 0, color: '#B62536' }, { x: 4, y: 0, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseZFalse)).to.equal(JSON.stringify(expectedZFalse));

  const responseLTrue = generatePiece(L, true);
  const expectedLTrue = {type: 'L', state: 'STATE_0',
    bricks: [{ x: 5, y: 0, color: '#B62536' }, { x: 3, y: 1, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseLTrue)).to.equal(JSON.stringify(expectedLTrue));

  const responseLFalse = generatePiece(L, false);
  const expectedLFalse = {type: 'L', state: 'STATE_0',
    bricks: [{ x: 5, y: 0, color: '#EA7D1A' }, { x: 3, y: 1, color: '#EA7D1A' },
      { x: 4, y: 1, color: '#EA7D1A' }, { x: 5, y: 1, color: '#EA7D1A' }]};
  expect(JSON.stringify(responseLFalse)).to.equal(JSON.stringify(expectedLFalse));

  const responseJTrue = generatePiece(J, true);
  const expectedJTrue = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 0, color: '#B62536' }, { x: 3, y: 1, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  expect(JSON.stringify(responseJTrue)).to.equal(JSON.stringify(expectedJTrue));

  const responseJFalse = generatePiece(J, false);
  const expectedJFalse = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 0, color: '#367CBC' }, { x: 3, y: 1, color: '#367CBC' },
      { x: 4, y: 1, color: '#367CBC' }, { x: 5, y: 1, color: '#367CBC' }]};
  expect(JSON.stringify(responseJFalse)).to.equal(JSON.stringify(expectedJFalse));

  const responseRandom = generatePiece(BRICKS_I, false);
  expect(JSON.stringify(responseRandom)).to.equal(JSON.stringify(null));
});

it('testCheckPieceAndShadowPos', () => {
  const piece = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 2, color: '#B62536' }, { x: 3, y: 3, color: '#B62536' },
      { x: 4, y: 3, color: '#B62536' }, { x: 5, y: 3, color: '#B62536' }]};
  const shadow1 = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 0, color: '#B62536' }, { x: 3, y: 1, color: '#B62536' },
      { x: 4, y: 1, color: '#B62536' }, { x: 5, y: 1, color: '#B62536' }]};
  const shadow2 = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 1, color: '#B62536' }, { x: 3, y: 2, color: '#B62536' },
      { x: 4, y: 2, color: '#B62536' }, { x: 5, y: 2, color: '#B62536' }]};
  const response1 = checkPieceAndShadowPos(shadow1, piece);
  const response2 = checkPieceAndShadowPos(shadow2, piece);
  expect(JSON.stringify(response1)).to.equal(JSON.stringify(undefined));
  expect(JSON.stringify(response2)).to.equal(JSON.stringify({ x: 3, y: 2, color: '#B62536' }));
});

it('defineShadowPiece', () => {
  const piece = null;
  const shadowPiece = null;
  const stack = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 }];
  const saveShadowPiece = jest.fn((x) => true);
  const width = 10;
  const height = 20;
  defineShadowPiece(piece, shadowPiece, stack, saveShadowPiece, width, height);
  const piece2 = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 18, color: '#B62536' }, { x: 3, y: 17, color: '#B62536' },
      { x: 4, y: 17, color: '#B62536' }, { x: 5, y: 17, color: '#B62536' }]};
  defineShadowPiece(piece2, shadowPiece, stack, saveShadowPiece, width, height);
  const piece3 = {type: 'J', state: 'STATE_0',
    bricks: [{ x: 3, y: 15, color: '#B62536' }, { x: 3, y: 14, color: '#B62536' },
      { x: 4, y: 14, color: '#B62536' }, { x: 5, y: 14, color: '#B62536' }]};
  defineShadowPiece(piece3, shadowPiece, stack, saveShadowPiece, width, height);
  expect(saveShadowPiece.mock.calls.length).to.equal(2);
});
