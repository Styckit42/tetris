import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import Menu from './Menu';
import Board from './Board';
import GameOver from './GameOver';
import Lobby from './Lobby';
import SpectreList from './SpectreList';
import {
  START_BOARD, IN_MULTI, IN_MENU, GAME_OVER, IN_LOBBY,
  MULTI_WAITING, VICTORY, IN_OPTIONS, WRONG_URL,
} from '../constants/statusConstants';
import tetrisMusic from '../sounds/tetris-theme.mp3';
import MultiWaiting from './MultiWaiting';
import Victory from './Victory';
import WrongInfo from './WrongInfo';
import Options from './Options';
import { resetStateAction } from '../actions/save';
import { tellServerToStartGame, resetServerState } from '../helpers/SocketEmit';
import Music from './Music';

const StyledGameArea = styled.div`
  display: flex;
  justify-content: center;
`;

const GameState = ({ gameState, gameOptions }) => {
  switch (gameState) {
    case START_BOARD:
      return (
        <StyledGameArea>
          <Music source={"/sounds/tetris-theme.mp3"} />
          <Board />
          <SpectreList />
        </StyledGameArea>
      );
    case MULTI_WAITING:
      return (
        <div>
          <MultiWaiting />
        </div>
      );
    case IN_MENU:
      resetServerState();
      return (
        <div><Menu /></div>
      );
    case GAME_OVER:
      return (
        <div><GameOver /></div>
      );
    case IN_LOBBY:
      return (
        <div><Lobby /></div>
      );
    case IN_MULTI:
      tellServerToStartGame(gameOptions);
      return null;
    case VICTORY:
      return (
        <div><Victory /></div>
      );
    case IN_OPTIONS:
      return (
        <div><Options /></div>
      );
    case WRONG_URL:
      return (
        <div><WrongInfo /></div>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  gameState: state.gameState,
  gameType: state.gameType,
  levels: state.levels,
  gameOptions: state.gameOptions,
});

const mapDispatchToProps = (dispatch) => ({
  resetState: () => {
    dispatch(resetStateAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameState);
