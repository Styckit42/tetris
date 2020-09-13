import React from 'react';
import { connect } from 'react-redux';
import functional from 'react-functional';
import Sound from 'react-sound';
import styled, { css, keyframes } from 'styled-components';
import Piece from './Piece';
import Score from './Score';
import { DOWN } from '../constants/keyBoardConstants';
import {
  savePieceAction, saveStackAction, saveSpeedAction, saveGameStateAction,
  saveScoreAction, saveLevelsAction, saveLinesErasedAction, saveHasToFallAction, resetStateAction,
  saveLinesBeingErasedAction,
} from '../actions/save';
import handleOnKeyDown from '../helpers/HandleEvents';
import BoardGenFuncs from '../helpers/BoardGeneration';
import NextPiece from './NextPiece';

const shakeOneLine = keyframes`
  0% {
    transform: translateX(0);
    filter: blur(0);
  } 25% {
    transform: translateX(10px);
  } 50% {
    filter: blur(4px);
  } 75% {
    transform: translateX(-10px);
  } 100% {
    transform: translateX(0);
    filter: blur(0);
  }
`;

const shakeRuleOneLine = css`
  ${shakeOneLine} 0.2s ease-in-out 2;
`;

const shakeTwoLines = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    filter: blur(0);
  } 25% {
    transform: translateX(15px) translateY(-10px);
  } 50% {
    filter: blur(4px);
    transform: translateX(0) translateY(15px)
  } 75% {
    transform: translateX(-15px) translateY(0);
  } 100% {
    transform: translateX(0) translateY(0);
    filter: blur(0);
  }
`;

const shakeRuleTwoLines = css`
  ${shakeTwoLines} 0.2s ease-in-out 2;
`;

const shakeThreeLines = keyframes`
  0% {
    transform: translateX(0);
    filter: blur(0);
  } 25% {
    transform: translateX(10px);
  } 50% {
    filter: blur(4px);
  } 75% {
    transform: translateX(-10px);
  } 100% {
    transform: translateX(0);
    filter: blur(0);
  }
`;

const shakeRuleThreeLines = css`
  ${shakeThreeLines} 0.2s ease-in-out 2;
`;

const shakeFourLines = keyframes`
  0% {
    transform: translateX(0);
    filter: blur(0);
  } 25% {
    transform: translateX(10px);
  } 50% {
    filter: blur(4px);
  } 75% {
    transform: translateX(-10px);
  } 100% {
    transform: translateX(0);
    filter: blur(0);
  }
`;

const shakeRuleFourLines = css`
  ${shakeFourLines} 0.2s ease-in-out 2;
`;

const StyledWrapper = styled.div`
  transform: translateZ(0);
  &:focus {
    outline: none;
  }
  ${ ({ linesBeingErased }) => linesBeingErased === 1  && css`
  animation: ${shakeRuleOneLine};
  `}
  ${ ({ linesBeingErased }) => linesBeingErased === 2  && css`
  animation: ${shakeRuleTwoLines};
  `}
`;

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 400px;
  width: 200px;
  position: relative;
  background-color: ${props => props.theme.darkColor};
  margin-top: 50px;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #FFF;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #FFF;
    z-index: -1;
    filter: blur(40px); 
  }

  &:before,
  &:after {
    background: linear-gradient(215deg, ${props => props.theme.mainColor}, ${props => props.theme.darkColor},  ${props => props.theme.brightBlueColor});
  }
`;

const width = 10;
const height = 20;

const Board = (props) => {
  const {
    piece, stack, volume,
  } = props;
  let test = [];
  if (piece !== null) {
    test = piece.bricks;
  }
  const board = BoardGenFuncs.generateBoard(width, height);
  console.log('piece');
  console.log(piece);
  console.log('stack');
  console.log(stack);
  console.log(board);
  const boardFiltered = BoardGenFuncs.filterBoard(board, test, stack);
  console.log(boardFiltered);
  console.log(board);
  return (
    <StyledWrapper linesBeingErased={ props.linesBeingErased } tabIndex="0" onKeyUp={(e) => { handleOnKeyDown(e, props, width, height); }}>
      <StyledBoard>
        <Piece bricks={boardFiltered} />
        <Piece bricks={test} />
        <Piece bricks={stack} />
      </StyledBoard>
      <div className="boxScore">
        <Score />
      </div>
      <NextPiece />
    </StyledWrapper>
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
  opponentList: state.opponentList,
  linesBeingErased: state.linesBeingErased,
  nextPiece: state.nextPiece,
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
  saveLinesBeingErased: (linesBeingErased) => {
    dispatch(saveLinesBeingErasedAction(linesBeingErased));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(functional(Board));