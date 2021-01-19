import React from 'react';
import Brick from './Brick';
import { calculateOrder } from '../helpers/Movements';

const Piece = ({ bricks, width, isShadow }) => {
  const piece = bricks.map(
    (brick) => {
      const { x, y } = brick;
      if (y >= 0) {
        const order = calculateOrder(x, y, width);
        return (<Brick brick={brick} key={order} isShadow={isShadow} />);
      }
      return false;
    },
  );
  return (
    <React.Fragment>
      {piece}
    </React.Fragment>
  );
};

export default Piece;
