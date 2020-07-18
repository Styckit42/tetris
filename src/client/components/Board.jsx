import React from 'react';
import { connect } from 'react-redux';
import functional from 'react-functional';
import Piece from './Piece';
import Score from './Score';
import styled from 'styled-components';
import { DOWN } from '../constants/keyBoardConstants';
import {
  savePieceAction, saveStackAction, saveSpeedAction, saveGameStateAction,
  saveScoreAction, saveLevelsAction, saveLinesErasedAction, saveHasToFallAction, resetStateAction,
} from '../actions/save';
import handleOnKeyDown from '../helpers/HandleEvents';
import { generateBoard, filterBoard } from '../helpers/BoardGeneration';
import tetrisMusic from '../sounds/tetris-theme.mp3';

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 400px;
  width: 200px;
  background-color: black;
`;

const width = 10;
const height = 20;

const sound = new Audio(tetrisMusic);

const Board = (props) => {
  const {
    piece, stack, volume,
  } = props;
  sound.volume = volume;
  sound.play();
  let test = [];
  if (piece !== null) {
    test = piece.bricks;
  }
  const board = generateBoard(width, height);
  const boardFiltered = filterBoard(board, test, stack);
  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => { handleOnKeyDown(e, props, width, height); }}>
      <StyledBoard>
        <Piece bricks={boardFiltered} />
        <Piece bricks={test} />
        <Piece bricks={stack} />
      </StyledBoard>
      <div className="boxScore">
        <Score />
      </div>
    </div>
  );
};

let myTimeout = null;
let mySpeed = 1000;

Board.componentDidMount = (props) => {
  
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