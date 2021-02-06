import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import { IN_MENU } from '../constants/statusConstants';
import { tellServerPlayerHasLoose } from '../helpers/SocketEmit';
import { resetStateAction, saveStackAction } from '../actions/save';

const StyledGameOver = styled.div`
  font-family: 'pepsi';
  h1 {
    text-align: center;
    font-family: 'roadRage';
    font-size: 6em;
  }
  p {
    text-align: center;
    font-size: 2em;
  }
`;

const GameOver = (props) => {
  const { score, levels, playerId, saveStack, resetState } = props;
  tellServerPlayerHasLoose(playerId);
  const newStack = [];
  saveStack(newStack);
  resetState();
  return (
    <StyledGameOver>
      <h1> Vous avez perdu </h1>
      <p>Vous finissez avec un score de {score} points</p>
      <p>Vous avez atteint le niveau {levels}</p>
      <p>Veuillez attendre la fin de la partie</p>
      <Button label="Go to Main menu" action={IN_MENU} />
    </StyledGameOver>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
  levels: state.levels,
  playerId: state.playerId,
});

const mapDispatchToProps = (dispatch) => ({
  saveStack: (stack) => {
    dispatch(saveStackAction(stack));
  },
  resetState: () => {
    dispatch(resetStateAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
