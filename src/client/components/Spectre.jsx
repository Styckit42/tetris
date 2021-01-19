import React from 'react';
import styled from 'styled-components';
import Piece from './Piece';
import { calculateSpectreStack, generateBoard, filterBoard } from '../helpers/BoardGeneration';

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 400px;
  width: 200px;
  background-color: black;
`;

const width = 10;
const height = 20;

const Spectre = (props) => {
  const { name, stack, score } = props;
  if (stack !== null) {
    const spectreStack = calculateSpectreStack(stack, width, height);
    const test = [];
    const board = generateBoard(width, height);
    const boardFiltered = filterBoard(board, test, spectreStack);
    return (
      <StyledBoard>
        {name}
        <Piece bricks={boardFiltered}/>
        <Piece bricks={spectreStack}/>
        {score}
      </StyledBoard>
    );
  }
  else {
    return (
      <div>
        stack = null
      </div>
    );
  }
};

export default Spectre;
