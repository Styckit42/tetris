export const aliveCount = (socket, currentGame) => {
  let aliveCount = 0;
  for (let j = 0; j < currentGame.playerList.length; j++) {
    if (currentGame.playerList[j].getIsLoose() === false
      && currentGame.playerList[j].getIsWaiting() === false) {
      aliveCount += 1;
    }
  }
  if (aliveCount === 1) {
    for (let k = 0; k < currentGame.playerList.length; k++) {
      if (currentGame.playerList[k].getIsLoose() === false
        && currentGame.playerList[k].getIsWaiting() === false) {
        socket.nsp.to(currentGame.playerList[k].id).emit('victory');
        currentGame.setIsGameRunning(false);
      }
    }
  }
};

export const giveLinesIndestructible = (linesErased, opponentList, currentGame, socket) => {
  for (let i = 0; i < opponentList.length; i++) {
    const { stack } = opponentList[i];
    const { id } = opponentList[i];
    if (stack) {
      stack.forEach((brick) => {
        brick.y -= linesErased;
      });
    }
    let y = 19;
    for (let j = 0; j < linesErased; j++) {
      for (let x = 0; x < 10; x++) {
        if (currentGame.gameOptions.colorBlind === true) {
          const brick = { x, y, color: '#fff' };
          stack.push(brick);
        } else {
          const brick = { x, y, color: '#808080' };
          stack.push(brick);
        }
      }
      y--;
    }
    for (let j = 0; j < currentGame.playerList.length; j++) {
      if (currentGame.playerList[j].id === id) {
        currentGame.playerList[j].stack = stack;
      }
    }
    socket.nsp.to(id).emit('linesFromOtherPlayers', stack, linesErased);
  }
};

export const randomHole = (width) => Math.floor(Math.random() * Math.floor(width));

export const giveLinesDestructibles = (linesErased, opponentList, currentGame, socket) => {
  for (let i = 0; i < opponentList.length; i++) {
    const { stack } = opponentList[i];
    const { id } = opponentList[i];
    const { width, height } = currentGame.gameOptions.boardSize;
    if (stack) {
      stack.forEach((brick) => {
        brick.y -= linesErased;
      });
    }
    let y = height - 1;
    for (let j = 0; j < linesErased; j++) {
      const holeIndex = randomHole(width);
      for (let x = 0; x < width; x++) {
        if (x !== holeIndex) {
          if (currentGame.gameOptions.colorBlind === true) {
            const brick = { x, y, color: '#fff' };
            stack.push(brick);
          } else {
            const brick = { x, y, color: '#808080' };
            stack.push(brick);
          }
        }
      }
      y--;
    }
    for (let j = 0; j < currentGame.playerList.length; j++) {
      if (currentGame.playerList[j].id === id) {
        currentGame.playerList[j].stack = stack;
      }
    }
    socket.nsp.to(id).emit('linesFromOtherPlayers', stack, linesErased);
  }
};
