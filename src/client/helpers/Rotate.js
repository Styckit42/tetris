import _ from 'lodash';
import * as r from '../constants/rotateConstants';

export const rotate = (piece) => {
  const pieceTmp = _.cloneDeep(piece);
  const { type, state, bricks } = pieceTmp;
  const rotation = r[`ROTATE_${type}`][state];
  for (let i = 0; i < bricks.length; i++) {
    bricks[i].x += rotation[i].x;
    bricks[i].y += rotation[i].y;
  }
  if (piece.state === r.STATE_0) {
    pieceTmp.state = r.STATE_1;
  } else if (piece.state === r.STATE_1) {
    pieceTmp.state = r.STATE_2;
  } else if (piece.state === r.STATE_2) {
    pieceTmp.state = r.STATE_3;
  } else if (piece.state === r.STATE_3) {
    pieceTmp.state = r.STATE_0;
  }
  return pieceTmp;
};

export const applyWallKick = (wallKick, piece) => {
  const { bricks } = piece;
  for (let i = 0; i < bricks.length; i++) {
    bricks[i].x += wallKick.x;
    bricks[i].y += wallKick.y;
  }
  return piece;
};
