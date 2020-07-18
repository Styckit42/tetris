import React from 'react';
import styled from 'styled-components';
import { calculateOrder } from '../helpers/Movements';

const StyledBrick = styled.div`
  flex: 0 0 auto;
  height: 18px;
  width: 18px;
  border-style: solid;
  border-color: white;
  border-width: 1px;
`;

const Brick = ({ x, y, color }) => {
  const orderItem = calculateOrder(x, y);
  const style = {
    order: orderItem,
    backgroundColor: color,
  };
  return (
    <StyledBrick style={style} />
  );
};

export default Brick;
