export default class Game {
  constructor(id) {
    this.id = id;
    this.startFlag = false;
    this.bag = null;
    this.admin = null;
    this.playerList = [];
  }
  getId() {
    return this.id;
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
      this.setAdmin(player);
    }
    this.playerList.push(player);
    return this;
  }
  removePlayer(playerToRemoveId) {
    console.log(playerToRemoveId);
    this.playerList = this.playerList.filter(player => player.id !== playerToRemoveId);
    console.log(this.playerList);
    if (this.admin.id === playerToRemoveId && this.playerList.length > 0) {
      console.log('wesh maggle');
      this.playerList[0].setAdmin(true);
      this.setAdmin(this.playerList[0]);
    }
    return this;
  }
}