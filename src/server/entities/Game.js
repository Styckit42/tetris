export default class Game {
  constructor(id) {
    this.id = id;
    this.startFlag = false;
    this.bag = null;
    this.admin = null;
    this.playerList = [];
  }
  setStartFlag(startFlag) {
    this.startFlag = startFlag;
    return this;
  }
  getStartFlag() {
    return this.startFlag;
  }
  setBag(bag) {
    this.bag = bag;
    return this;
  }
  getBag() {
    return this.bag;
  }
  setAdmin(admin) {
    this.admin = admin;
    return this;
  }
  getAdmin() {
    return this.admin;
  }
  getPlayerList() {
    return this.playerList;
  }
  addPlayer(player) {
    if (this.playerList.length === 0) {
      player.setAdmin(true);
    }
    this.playerList.push(player);
    return this;
  }
  removePlayer(playerToRemove) {
    this.playerList.filter(player => player.id !== playerToRemove.id);
    if (playerToRemove.getAdmin() === true && this.playerList.length > 0) {
      this.playerList[0].setAdmin(true);
    }
    return this;
  }
  /* id
  playersList
  startFlag
  bag
  admin */
}