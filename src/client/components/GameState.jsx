import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';
import Menu from './Menu';
import Board from './Board';
import MultiMenu from './MultiMenu';
import GameOver from './GameOver';
import Lobby from './Lobby';
import JoinLobby from './JoinLobby';
import SpectreList from './SpectreList';
import {
  IN_SOLO, MULTI_MENU, IN_MULTI, IN_MENU, GAME_OVER, IN_LOBBY, IN_JOIN,
  MULTI_WAITING, VICTORY, IN_OPTIONS, WRONG_URL,
} from '../constants/statusConstants';
import tetrisMusic from '../sounds/tetris-theme.mp3';
import MultiWaiting from './MultiWaiting';
import Victory from './Victory';
import WrongInfo from './WrongInfo';
import { Options } from './Options';
import { resetStateAction } from '../actions/save';
import { startGameMulti, resetServerState } from '../helpers/SocketEmit';

const StyledGameArea = styled.div`
  display: flex;
  justify-content: center;
`;

const GameState = ({ gameState, resetState }) => {
  switch (gameState) {
    case IN_SOLO:
      return (
        <StyledGameArea>
          <Board />
          <SpectreList />
        </StyledGameArea>
      );
    case MULTI_MENU:
      return (
        <div>
          <MultiMenu />
        </div>
      );
    case MULTI_WAITING:
      return (
        <div>
          <MultiWaiting />
        </div>
      );
    case IN_MENU:
      resetState();
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
    case IN_JOIN:
      return (
        <div><JoinLobby /></div>
      );
    case IN_MULTI:
      startGameMulti();
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
});

const mapDispatchToProps = (dispatch) => ({
  resetState: () => {
    dispatch(resetStateAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameState);