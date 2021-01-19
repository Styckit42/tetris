import {expect} from 'chai';
import {rotate, applyWallKick} from '../../helpers/Rotate';

it('testRotate', () => {
  const piece = {
    type: 'I',
    state: 'STATE_0',
    bricks: [
      { x: 3, y: 1, color: '#E23396' }, { x: 4, y: 1, color: '#E23396' },
      { x: 5, y: 1, color: '#E23396' }, { x: 6, y: 1, color: '#E23396' },
    ],
  };
  const response = rotate(piece);
  const expected = {
    type: 'I',
    state: 'STATE_1',
    bricks: [
      { x: 5, y: 0, color: '#E23396' }, { x: 5, y: 1, color: '#E23396' },
      { x: 5, y: 2, color: '#E23396' }, { x: 5, y: 3, color: '#E23396' },
    ],
  };
  expect(JSON.stringify(response)).to.equal(JSON.stringify(expected));
  const piece2 = {
    type: 'I',
    state: 'STATE_1',
    bricks: [
      { x: 5, y: 0, color: '#E23396' }, { x: 5, y: 1, color: '#E23396' },
      { x: 5, y: 2, color: '#E23396' }, { x: 5, y: 3, color: '#E23396' },
    ],
  };
  const response2 = rotate(piece2);
  const expected2 = {
    type: 'I',
    state: 'STATE_2',
    bricks: [
      { x: 6, y: 2, color: '#E23396' }, { x: 5, y: 2, color: '#E23396' },
      { x: 4, y: 2, color: '#E23396' }, { x: 3, y: 2, color: '#E23396' },
    ],
  };
  expect(JSON.stringify(response2)).to.equal(JSON.stringify(expected2));
  const piece3 = {
    type: 'I',
    state: 'STATE_2',
    bricks: [
      { x: 6, y: 2, color: '#E23396' }, { x: 5, y: 2, color: '#E23396' },
      { x: 4, y: 2, color: '#E23396' }, { x: 3, y: 2, color: '#E23396' },
    ],
  };
  const response3 = rotate(piece3);
  const expected3 = {
    type: 'I',
    state: 'STATE_3',
    bricks: [
      { x: 4, y: 3, color: '#E23396' }, { x: 4, y: 2, color: '#E23396' },
      { x: 4, y: 1, color: '#E23396' }, { x: 4, y: 0, color: '#E23396' },
    ],
  };
  expect(JSON.stringify(response3)).to.equal(JSON.stringify(expected3));
  const piece4 = {
    type: 'I',
    state: 'STATE_3',
    bricks: [
      { x: 4, y: 3, color: '#E23396' }, { x: 4, y: 2, color: '#E23396' },
      { x: 4, y: 1, color: '#E23396' }, { x: 4, y: 0, color: '#E23396' },
    ],
  };
  const response4 = rotate(piece4);
  const expected4 = {
    type: 'I',
    state: 'STATE_0',
    bricks: [
      { x: 3, y: 1, color: '#E23396' }, { x: 4, y: 1, color: '#E23396' },
      { x: 5, y: 1, color: '#E23396' }, { x: 6, y: 1, color: '#E23396' },
    ],
  };
  expect(JSON.stringify(response4)).to.equal(JSON.stringify(expected4));
});

it('testApplyWallKick', () => {
  const piece = {
    type: 'I',
    state: 'STATE_3',
    bricks: [
      { x: 4, y: 3, color: '#E23396' }, { x: 4, y: 2, color: '#E23396' },
      { x: 4, y: 1, color: '#E23396' }, { x: 4, y: 0, color: '#E23396' },
    ],
  };
  const wallKick = { x: 1, y: -1 };
  const response = applyWallKick(wallKick, piece);
  const expected = {
    type: 'I',
    state: 'STATE_3',
    bricks: [
      { x: 5, y: 2, color: '#E23396' }, { x: 5, y: 1, color: '#E23396' },
      { x: 5, y: 0, color: '#E23396' }, { x: 5, y: -1, color: '#E23396' },
    ],
  };
  expect(JSON.stringify(response)).to.equal(JSON.stringify(expected));
});
