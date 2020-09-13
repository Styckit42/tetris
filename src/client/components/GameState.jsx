import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';
import Menu from './Menu';
import Board from './Board';
import NextPiece from './NextPiece';
import MultiMenu from './MultiMenu';
import GameOver from './GameOver';
import Lobby from './Lobby';
import JoinLobby from './JoinLobby';
import SpectreList from './SpectreList';
import {
  IN_SOLO, MULTI_MENU, IN_MULTI, IN_MENU, GAME_OVER, IN_LOBBY, IN_JOIN,
} from '../constants/statusConstants';
import { startGameMulti } from '../helpers/SocketEmit';
import tetrisMusic from '../sounds/tetris-theme.mp3';

const StyledGameArea = styled.div`
  display: flex;
  justify-content: center;
`; 

const GameState = ({ gameState }) => {
  switch (gameState) {
    case IN_SOLO:
      return (
        <StyledGameArea>
          <Sound  url={tetrisMusic}
                  autoLoad='true'
                  volume={100}
                  playStatus={Sound.status.PLAYING}/>
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
    case IN_MENU:
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
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  gameState: state.gameState,
});

export default connect(mapStateToProps, null)(GameState);