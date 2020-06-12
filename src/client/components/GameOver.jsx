import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { resetStateAction } from '../actions/save';

/* eslint-disable no-debugger,  react/jsx-one-expression-per-line */
const GameOver = (props) => {
  const { score, levels, resetState } = props;
  return (
    <div>
      <h1> YOU LOOSE </h1>
      <p>Vous finissez avec un score de {score} points</p>
      <p>Vous avez atteint le niveau {levels}</p>
      <Button label="Go to Main menu" action={resetState} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  score: state.score,
  levels: state.levels,
});

const mapDispatchToProps = (dispatch) => ({
  resetState: () => {
    dispatch(resetStateAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);