import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

export const Options = () => {
  console.log('in options');
  return (
    <div>
      <h1>Niveau de départ (plus le niveau est haut, plus la pièce tombe vite)</h1>
      <div>
        <Button label="1" />
        <Button label="6" />
        <Button label="11" />
      </div>
      <h1>Taille de la grille</h1>
      <h1>Mode daltonien</h1>
      <h1>Multijoueurs: type de partie</h1>
      <div>
        <Button label="Sans ajout de lignes" />
        <Button label="Ajout de lignes destructibles" />
        <Button label="Ajout de lignes indestructibles" />
      </div>
    </div>
  );
};

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
