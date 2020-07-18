import React from 'react';
import GameState from './GameState';
import Socket from './Socket';

const Main = () => {
  return (
    <div>
      <GameState />
      <Socket />
    </div>
  );
};

export default Main
