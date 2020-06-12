export default class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
    this.level = 1;
    this.spectre = null;
    this.admin = false;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  getName() {
    return this.name;
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
  setSpectre(spectre) {
    this.spectre = spectre;
    return this;
  }
  getSpectre() {
    return this.spectre;
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