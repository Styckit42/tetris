import React from 'react';
import Brick from './Brick';
import MovementsFuncs from '../helpers/Movements';

const Piece = ({ bricks, width }) => {
  const piece = bricks.map(
    (brick) => {
      const { x, y } = brick;
      if (y >= 0) {
        const order = MovementsFuncs.calculateOrder(x, y, width);
        return (<Brick brick={brick} key={order} />);
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
