export default class Player {
  constructor(id) {
    this.id = id;
    this.name = '';
    this.score = 0;
    this.level = 1;
    this.stack = null;
    this.admin = false;
    this.bagIndex = 0;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  getName() {
    return this.name;
  }
  getBagIndex() {
    return this.bagIndex;
  }
  setScore(score) {
    this.score = score;
    return this;
  }
  getScore() {
    return this.score;
  }
  setLevel(level) {
    this.level = level;
    return this;
  }
  getLevel() {
    return this.level;
  }
  setStack(stack) {
    this.stack = stack;
    return this;
  }
  getStack() {
    return this.stack;
  }
  setAdmin(admin) {
    this.admin = admin;
    return this;
  }
  getAdmin() {
    return this.admin;
  }
  /* name
  score
  level
  spectre */
}