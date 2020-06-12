import React from 'react';
import Brick from './Brick';
import { calculateOrder } from '../helpers/Movements';

const Piece = ({ bricks }) => {
  const piece = bricks.map(
    (brick) => {
      const { x, y, color } = brick;
      if (y >= 0) {
        const order = calculateOrder(x, y);
        return (<Brick x={x} y={y} color={color} key={order} />);
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

/**
 * Piece
 * Piece component, child of Board, parent of Brick
 * param : bricks (object)
 * return : piece
 */
