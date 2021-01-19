import Bag from '../../entities/Bag';

it ('testBag', () => {
  const bag = new Bag('abc');
  bag.givePiecesToPlayer(0, 1);
});
