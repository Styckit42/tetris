import Player from '../../entities/Player';

it ('testBag', () => {
  const player = new Player('abc', 'toto');
  player.setName('toto');
  player.getName();
  player.getBagIndex();
  player.setScore(450);
  player.getScore();
  player.setLevel(4);
  player.getLevel();
  player.setStack([]);
  player.getStack();
  player.setAdmin(true);
  player.getAdmin();
  player.setIsLoose(false);
  player.getIsLoose();
  player.setIsWaiting(true);
  player.getIsWaiting();
  player.resetState();
});
