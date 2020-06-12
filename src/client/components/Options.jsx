import React from 'react';
import { connect } from 'react-redux';

export const Options = () => {
  return (
    <div>
      <Button label="Start Solo game" action={IN_SOLO} />
      <Button label="Start Multiplayer game" action={IN_MULTI} />
      <Button label="Show Best Score" action={BEST_SCORE} />
      <Button label="Options" action={IN_OPTIONS} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  gameState: state.gameState,
  speed: state.speed,
  volume: state.volume,
});

const mapDispatchToProps = (dispatch) => ({
  saveGameState: (gameState) => {
    dispatch(saveGameStateAction(gameState));
  },
  resetState: () => {
    dispatch(resetStateAction());
  },
  saveSpeed: (speed) => {
    dispatch(saveSpeedAction(speed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Options)