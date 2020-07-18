import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Board from './Board';
import NextPiece from './NextPiece';
import MultiMenu from './MultiMenu';
import GameOver from './GameOver';
import Lobby from './Lobby';
import SpectreList from './SpectreList';
import {
  IN_SOLO, MULTI_MENU, IN_MULTI, IN_MENU, GAME_OVER, IN_LOBBY,
} from '../constants/statusConstants';
import { startGameMulti } from '../helpers/SocketEmit';

const GameState = ({ gameState }) => {
  switch (gameState) {
    case IN_SOLO:
      return (
        <div>
          <Board />
          <NextPiece />
          <SpectreList />
        </div>
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