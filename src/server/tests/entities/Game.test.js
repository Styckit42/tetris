import Game from '../../entities/Game';
import Player from "../../entities/Player";

it ('testBag', () => {
  const game = new Game('abc');
  game.getId();
  game.getAdmin();
  game.getIsGameRunning();
  game.getBag();
  game.resetBag()
  game.getGameOptions();
  game.getGameType();
  game.getColorBlind();
  game.getBoardSize();
  game.getLevelStart();
  game.getPlayerList();
  game.setIsGameRunning(true);
  game.setBag([]);
  game.setAdmin(true);
  game.setGameOptions({});
  game.setGameType(1);
  game.setColorBlind(true);
  game.setBoardSize(null);
  game.setLevelStart(4);
  game.addPlayer(new Player('174', 'toto'));
  game.removePlayer('174');
});
