import React from 'react';
import { connect } from 'react-redux';
import { saveGameStateAction } from '../actions/save';

const Button = (props) => {
  const { label, action, saveGameState } = props;
  return (
    <button type="button" onClick={() => saveGameState(action)}>
      {label}
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
});

export default connect(null, mapDispatchToProps)(Button);