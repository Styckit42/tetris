import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { IN_MENU } from '../constants/statusConstants';
import { tellServerPlayerHasLoose } from '../helpers/SocketEmit';

const GameOver = (props) => {
  const { score, levels, playerId } = props;
  tellServerPlayerHasLoose(playerId);
  return (
    <div>
      <h1> YOU LOOSE </h1>
      <p>Vous finissez avec un score de {score} points</p>
      <p>Vous avez atteint le niveau {levels}</p>
      <p>Veuillez attendre la fin de la partie</p>
      <Button label="Go to Main menu" action={IN_MENU} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
  levels: state.levels,
  playerId: state.playerId,
});

export default connect(mapStateToProps, null)(GameOver);