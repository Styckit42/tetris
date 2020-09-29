import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

export const Options = () => {
  console.log('in options');
  return (
    <div>
      <div>
        <h1>Niveau de départ (plus le niveau est haut, plus la pièce tombe vite)</h1>
        <Button label="1" />
        <Button label="6" />
        <Button label="11" />
      </div>
      <div>
        <h1>Taille de la grille</h1>
        <Button label="10x20" />
        <Button label="15x30" />
        <Button label="20x40" />
      </div>
      <div>
        <h1>Mode daltonien</h1>
        <Button label="activé" />
        <Button label="désactivé" />
      </div>
      <div>
        <h1>Multijoueurs: type de partie</h1>
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
