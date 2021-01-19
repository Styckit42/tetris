export const isStackHigh = (stack) => {
  const a = 3;
  const b = 6;
  for (let i = 0; i < stack.length; i += 1) {
    if (stack[i].y <= 1) {
      if (stack[i].x >= a && stack[i].x <= b) {
        return true;
      }
    }
  }
  return false;
};

export const gameOverCheck = (bricks) => {
  for (let i = 0; i < bricks.length; i += 1) {
    if (bricks[i].y < 0) {
      return true;
    }
  }
  return false;
};
