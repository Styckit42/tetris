import React from "react"
import {calculateOrder} from '../helpers/Movements.js'

const Brick = ({ x, y, color }) => {
    const orderItem = calculateOrder(x, y);
    const style = {
        order: orderItem,
        backgroundColor: color 
    };
    return (
        <div className='brick' style={style}>
        </div>
    );
}

export default Brick;

/**
 * Brick
 * brick component, child of Piece
 * param : destructured object
 */