import React from 'react';
import Button from './Button';
import { IN_LOBBY, IN_JOIN } from '../constants/statusConstants';

const MultiMenu = () => (
  <div>
    <Button label="Create Room" action={IN_LOBBY} />
    <Button label="Join Room" action={IN_JOIN}/>
  </div>
);

export default MultiMenu;