import { expect } from 'chai';
import handleOnkeyDown from '../../helpers/HandleEvents';
import {UP, LEFT, SPACE} from '../../constants/keyBoardConstants';

it('testHandleOnKeyDown', () => {
  const width = 10;
  const height = 20;
  const piece = {
    type: 'I',
    state: 'STATE_0',
    bricks: [
      { x: 3, y: 1, color: '#E23396' }, { x: 4, y: 1, color: '#E23396' },
      { x: 5, y: 1, color: '#E23396' }, { x: 6, y: 1, color: '#E23396' },
    ],
  };
  const stack = [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 }];
  const savePiece = jest.fn((x) => true);
  const saveShadowPiece = jest.fn((x) => true);
  const saveGameState = jest.fn((x) => true);
  const saveStack = jest.fn((x) => true);
  const saveScore = jest.fn((x) => true);
  const saveLevels = jest.fn((x) => true);
  const saveLinesErased = jest.fn((x) => true);
  const saveSpeed = jest.fn((x) => true);
  const saveLinesBeingErased = jest.fn((x) => true);
  const getNextPieceFromServer = jest.fn((x) => true);
  const props = {
    piece,
    stack,
    savePiece,
    saveShadowPiece,
    score: 1000,
    opponentList: [],
    levels: 5,
    linesErased: 2,
    saveGameState,
    saveStack,
    saveLevels,
    saveScore,
    saveLinesErased,
    saveSpeed,
    saveLinesBeingErased,
    getNextPieceFromServer,
  };
  handleOnkeyDown({ keyCode: UP }, props, width, height);
  handleOnkeyDown({ keyCode: LEFT }, props, width, height);
  const piece2 = {
    type: 'I',
    state: 'STATE_0',
    bricks: [
      {x: 3, y: 18, color: '#E23396'}, {x: 4, y: 18, color: '#E23396'},
      {x: 5, y: 18, color: '#E23396'}, {x: 6, y: 18, color: '#E23396'},
    ],
  };
  props.piece = piece2;
  handleOnkeyDown({ keyCode: SPACE }, props, width, height);
  props.piece = null;
  handleOnkeyDown({ keyCode: SPACE }, props, width, height);
  expect(savePiece.mock.calls.length).to.equal(3);
  expect(saveShadowPiece.mock.calls.length).to.equal(3);
  expect(saveStack.mock.calls.length).to.equal(1);
});
