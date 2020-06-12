import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Board from './Board';
import NextPiece from './NextPiece';
import MultiMenu from './MultiMenu';
import GameOver from './GameOver';
import {
  IN_SOLO, IN_MULTI, IN_MENU, GAME_OVER,
} from '../constants/statusConstants';

const Main = ({ gameState }) => {
  switch (gameState) {
    case IN_SOLO:
      return (
        <div>
          <Board />
          <NextPiece />
        </div>
      );
    case IN_MULTI:
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
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  gameState: state.gameState,
});

export default connect(mapStateToProps, null)(Main);
