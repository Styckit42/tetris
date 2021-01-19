import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import { generateBoard, filterBoard } from '../helpers/BoardGeneration';
import Piece from './Piece';

const StyledBoardNextPiece = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 80px;
  width: 120px;
  background-color: black;
`;

const width = 6;
const height = 4;

const NextPiece = (props) => {
  const {
    nextPiece,
  } = props;
  if (nextPiece === null) {
    return null;
  }
  const pieceTmp = _.cloneDeep(nextPiece);
  pieceTmp.bricks.map(
    (brick) => {
      brick.x -= 2;
      brick.y += 1;
      return brick;
    },
  );
  const board = generateBoard(width, height);
  const boardFiltered = filterBoard(board, pieceTmp.bricks, []);
  return (
    <StyledBoardNextPiece>
      <Piece bricks={boardFiltered} />
      <Piece bricks={pieceTmp.bricks} />
    </StyledBoardNextPiece>
  );
};

const mapStateToProps = (state) => ({
  nextPiece: state.nextPiece,
});

export default connect(mapStateToProps, null)(NextPiece);
