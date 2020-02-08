import React from "react"
import Brick from './Brick.js'
import {calculateOrder} from '../helpers/Movements.js'

const Piece = ({ bricks }) => {
  const piece = bricks.map(
    brick => { 
      const { x, y, color } = brick;
      const order = calculateOrder(x, y);
      return (<Brick x={x} y={y} color={color} key={order}/>);
    }
  );
  console.log(typeof(piece))
  return (
    <React.Fragment>
      {piece}
    </React.Fragment>
  );
}

export default Piece;

/**
 * Piece
 * Piece component, child of Board, parent of Brick
 * param : bricks (object)
 * return : piece
 */