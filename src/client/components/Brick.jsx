import React from 'react';
import styled from 'styled-components';
import MovementsFuncs from '../helpers/Movements';

const Brick = styled.div`
  flex: 0 0 auto;
  height: 18px;
  width: 18px;
  border-style: solid;
  border-color: ${(props) => (props.brick.isSpectre ? 'none' : 'rgba(255, 255, 255, 0.5)')};
  border-width: 1px;
  order: ${(props) => MovementsFuncs.calculateOrder(props.brick.x, props.brick.y)};
  background-color: ${(props) => props.brick.color}
`;

export default Brick;
