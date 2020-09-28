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
  getPlayerList() {
    return this.playerList;
  }
  addPlayer(player) {
    if (this.playerList.length === 0) {
      console.log(player);
      player.setAdmin(true);
      this.setAdmin(player);
    }
    this.playerList.push(player);
    return this;
  }
  removePlayer(playerToRemoveId) {
    this.playerList = this.playerList.filter(player => player.id !== playerToRemoveId);
    if (this.admin.id === playerToRemoveId && this.playerList.length > 0) {
      this.playerList[0].setAdmin(true);
      this.setAdmin(this.playerList[0]);
    }
    return this;
  }
}
