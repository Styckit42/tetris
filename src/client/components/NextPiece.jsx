import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { generateBoard, filterBoard } from '../helpers/BoardGeneration';
import Piece from './Piece';
import { generatePiece } from '../helpers/PieceGenerations';

const width = 6;
const height = 4;

const NextPiece = (props) => {
  const {
    bag,
  } = props;
  if (bag === null) {
    return null;
  }
  const piece = generatePiece(bag[0]);
  const pieceTmp = _.cloneDeep(piece);
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
    <div className="board-NextPiece">
      <Piece bricks={boardFiltered} />
      <Piece bricks={pieceTmp.bricks} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bag: state.bag,
});

export default connect(mapStateToProps, null)(NextPiece);