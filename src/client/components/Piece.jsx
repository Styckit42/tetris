import React from 'react';
import Brick from './Brick';
import MovementsFuncs from '../helpers/Movements';

const Piece = ({ bricks }) => {
  const piece = bricks.map(
    (brick) => {
      const { x, y } = brick;
      if (y >= 0) {
        const order = MovementsFuncs.calculateOrder(x, y);
        return (<Brick brick={brick} key={order} />);
      }
      return false;
    },
  );
  console.log("dans piece");
  console.log(piece);
  return (
    <React.Fragment>
      {piece}
    </React.Fragment>
  );
};

export default Piece;
