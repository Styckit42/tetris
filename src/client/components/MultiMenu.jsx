import React from 'react';
import Button from './Button';
import { IN_LOBBY } from '../constants/statusConstants';

const MultiMenu = () => (
  <div>
    <Button label="Create Room" action={IN_LOBBY} />
    <Button label="Join Room" />
  </div>
);

export default MultiMenu;