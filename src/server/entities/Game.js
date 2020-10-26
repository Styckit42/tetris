export default class Game {
  /**
   *
   * @param string id
   */
  constructor(id) {
    this.id = id;
    this.isGameRunning = false;
    this.bag = null;
    this.admin = null;
    this.playerList = [];
    this.gameOptions = {
      gameType: 1,
      levelStart: 1,
      colorBlind: false,
      boardSize: {
        width: 10,
        height: 20,
      },
    };
  }

  getId() {
    return this.id;
  }

  setIsGameRunning(isGameRunning) {
    this.isGameRunning = isGameRunning;
    return this;
  }

  getIsGameRunning() {
    return this.isGameRunning;
  }

  setBag(bag) {
    this.bag = bag;
    return this;
  }

  getBag() {
    return this.bag;
  }

  resetBag() {
    this.bag = null;
    return this;
  }

  setAdmin(admin) {
    this.admin = admin;
    return this;
  }

  getAdmin() {
    return this.admin;
  }

  setGameOptions(gameOptions) {
    this.gameOptions = gameOptions;
    return this;
  }

  getGameOptions() {
    return this.gameOptions;
  }

  setGameType(gameType) {
    this.gameOptions.gameType = gameType;
    return this;
  }

  getGameType() {
    return this.gameOptions.gameType;
  }

  setColorBlind(colorBlind) {
    this.gameOptions.colorBlind = colorBlind;
    return this;
  }

  getColorBlind() {
    return this.gameOptions.colorBlind;
  }

  setBoardSize(boardSize) {
    this.gameOptions.boardSize = boardSize;
    return this;
  }

  getBoardSize() {
    return this.gameOptions.boardSize;
  }

  setLevelStart(levelStart) {
    this.gameOptions.levelStart = levelStart;
    return this;
  }

  getLevelStart() {
    return this.gameOptions.levelStart;
  }

  getPlayerList() {
    return this.playerList;
  }

  addPlayer(player) {
    if (this.playerList.length === 0) {
      player.setAdmin(true);
      this.setAdmin(player);
    }
    this.playerList.push(player);
    return this;
  }

  removePlayer(playerToRemoveId) {
    this.playerList = this.playerList.filter((player) => player.id !== playerToRemoveId);
    if (this.admin.id === playerToRemoveId && this.playerList.length > 0) {
      this.playerList[0].setAdmin(true);
      this.setAdmin(this.playerList[0]);
    }
    return this;
  }
}
