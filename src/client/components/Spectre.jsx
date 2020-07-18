import React from 'react';
import Piece from './Piece';
import styled from 'styled-components';
import { generateBoard, filterBoard } from '../helpers/BoardGeneration';

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
  const { id, stack, score } = props;
  let test = [];
  const board = generateBoard(width, height);
  const boardFiltered = filterBoard(board, test, stack);
  return (
    <StyledBoard>
      <Piece bricks={boardFiltered} />
      <Piece bricks={stack} />
    </StyledBoard>
  );
};

export default Spectre;