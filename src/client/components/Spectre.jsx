import React from 'react';
import styled from 'styled-components';
import Piece from './Piece';
import BoardGenFuncs from '../helpers/BoardGeneration';

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 400px;
  width: 200px;
  background-color: black;
`;

const width = 10;
const height = 20;

/*const spectreLine = (stack) => {

};*/

const Spectre = (props) => {
  const { id, stack, score } = props;
  const spectreStack = BoardGenFuncs.calculateSpectreStack(stack, width, height);
  let test = [];
  const board = BoardGenFuncs.generateBoard(width, height);
  const boardFiltered = BoardGenFuncs.filterBoard(board, test, spectreStack);
  return (
    <StyledBoard>
      <Piece bricks={boardFiltered} />
      <Piece bricks={spectreStack} />
    </StyledBoard>
  );
};

export default Spectre;