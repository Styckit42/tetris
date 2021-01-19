import {
  I, O, T, S, Z, L, J,
} from '../constants/piecesConstants.js';

export default class Bag {
  constructor(gameId) {
    this.gameId = gameId;
    this.mainBag = [];
    this.mainBag = this.fillBag();
  }

  fillBag() {
    return ([...this.mainBag, ...this.generateBag()]);
  };

  givePiecesToPlayer = (bagIndex, nbPiecesToReturn) => {
    if (bagIndex < 0 || nbPiecesToReturn < 1) {
      console.error("invalid param in givePiecesToPlayer");
    }
    while (1) {
      if (bagIndex + nbPiecesToReturn >= this.mainBag.length) {
        this.mainBag = [...this.mainBag, ...this.generateBag()];
        continue;
      }
      return this.mainBag.slice(bagIndex, bagIndex + nbPiecesToReturn);
    }
  };

  shuffle(array) {
    let currentIndex = array.length; let temporaryValue; let
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  generateBag = () => {
    let bag = [I, O, T, S, Z, L, J];
    bag = this.shuffle(bag);
    return (bag);
  };
};
