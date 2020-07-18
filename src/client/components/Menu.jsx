import React from 'react';
import {
  IN_SOLO, MULTI_MENU, IN_OPTIONS, BEST_SCORE,
} from '../constants/statusConstants';
import Button from './Button';

const Menu = () => (
  <div>
    <Button label="Start Solo game" action={IN_SOLO} />
    <Button label="Start Multiplayer game" action={MULTI_MENU} />
    <Button label="Show Best Score" action={BEST_SCORE} />
    <Button label="Options" action={IN_OPTIONS} />
  </div>
);

export default Menu;
