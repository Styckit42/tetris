import React from 'react';
import { connect } from 'react-redux';
import functional from 'react-functional';
import Piece from './Piece';
import Score from './Score';
import { DOWN } from '../constants/keyBoardConstants';
import {
  savePieceAction, saveBagAction, saveStackAction, saveSpeedAction, saveGameStateAction,
  saveScoreAction, saveLevelsAction, saveLinesErasedAction, saveHasToFallAction, resetStateAction,
} from '../actions/save';
import { generatePiece, generateBag } from '../helpers/PieceGenerations';
import handleOnKeyDown from '../helpers/HandleEvents';
import { generateBoard, filterBoard } from '../helpers/BoardGeneration';
import tetrisMusic from '../sounds/tetris-theme.mp3';

const width = 10;
const height = 20;

const sound = new Audio(tetrisMusic);

const Board = (props) => {
  const {
    piece, stack, volume,
  } = props;
  sound.volume = volume;
  sound.play();
  if (piece === null) {
    return null;
  }
  const board = generateBoard(width, height);
  const boardFiltered = filterBoard(board, piece.bricks, stack);
  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => { handleOnKeyDown(e, props, width, height); }}>
      <div className="board">
        <Piece bricks={boardFiltered} />
        <Piece bricks={piece.bricks} />
        <Piece bricks={stack} />
      </div>
      <div className="boxScore">
        <Score />
      </div>
    </div>
  );
};

let myTimeout = null;
let mySpeed = 1000;

Board.componentDidMount = (props) => {
  const bag = generateBag();
  const piece = generatePiece(bag[0]);
  bag.shift();
  props.savePiece(piece);
  props.saveBag(bag);
  myTimeout = setInterval(() => { props.saveHasToFall(true); }, props.speed);
};

Board.componentDidUpdate = (props) => {
  if (mySpeed !== props.speed) {
    mySpeed = props.speed;
    clearInterval(myTimeout);
    myTimeout = setInterval(() => { props.saveHasToFall(true); }, props.speed);
  }
  if (props.hasToFall === true) {
    handleOnKeyDown({ keyCode: DOWN }, props, width, height);
    props.saveHasToFall(false);
  }
};

Board.componentWillUnmount = () => {
  clearInterval(myTimeout);
};

const mapStateToProps = (state) => ({
  piece: state.piece,
  stack: state.stack,
  gameState: state.gameState,
  score: state.score,
  levels: state.levels,
  linesErased: state.linesErased,
  bag: state.bag,
  speed: state.speed,
  hasToFall: state.hasToFall,
  volume: state.volume,
});

const mapDispatchToProps = (dispatch) => ({
  savePiece: (piece) => {
    dispatch(savePieceAction(piece));
  },
  saveStack: (piece) => {
    dispatch(saveStackAction(piece));
  },
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
  saveScore: (score) => {
    dispatch(saveScoreAction(score));
  },
  saveLevels: (levels) => {
    dispatch(saveLevelsAction(levels));
  },
  saveLinesErased: (linesErasedInCurrentLevel) => {
    dispatch(saveLinesErasedAction(linesErasedInCurrentLevel));
  },
  saveBag: (bag) => {
    dispatch(saveBagAction(bag));
  },
  saveHasToFall: (hasToFall) => {
    dispatch(saveHasToFallAction(hasToFall));
  },
  resetState: () => {
    dispatch(resetStateAction());
  },
  saveSpeed: (speed) => {
    dispatch(saveSpeedAction(speed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(functional(Board));