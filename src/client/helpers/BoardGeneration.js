// Génération du board entier
export const generateBoard = (width, height) => {
  const board = [];
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      const brickBoard = {
        x: i,
        y: j,
        color: 'transparent',
      };
      board.push(brickBoard);
    }
  }
  return board;
};

/* eslint-disable no-restricted-syntax, guard-for-in */
// Enlever les coord des pieces en cours et du tas, du board entier
const filterPieces = (brickBoard, piece, stack) => {
  for (const index in piece) {
    const brick = piece[index];
    if (brickBoard.x === brick.x && brickBoard.y === brick.y) {
      return false;
    }
  }
  for (const index in stack) {
    const brick = stack[index];
    if (brickBoard.x === brick.x && brickBoard.y === brick.y) {
      return false;
    }
  }
  return true;
};

export const filterBoard = (board, piece, stack) => {
  for (let i = 0; i < board.length; i++) {
    const brickBoard = board[i];
    if (!filterPieces(brickBoard, piece, stack)) {
      board.splice(i, 1);
      i--;
    }
  }
  return board;
};