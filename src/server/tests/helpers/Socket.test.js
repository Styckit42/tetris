import { isPlayersInGame, disconnectPlayer, startGame, increaseBagIndex, updateOpponentList, giveLinesToOpponents,
  isGameRunning, giveInfoToPlayer, playerHasLoose, resetServerState, wrongInfo,
} from '../../helpers/Socket';
import io from './Socket.mock';
import Player from "../../entities/Player";
import Game from "../../entities/Game";

it('renderWithoutCrashing', () => {
  const socket = io.connect();
  socket.nsp = {};
  socket.nsp.to = jest.fn((x) => {
    const client = {};
    client.emit = jest.fn((x) => true);
    return client;
  });
  socket.broadcast = {};
  socket.broadcast.emit = jest.fn((x) => true);
  const currentGame = new Game('145');
  currentGame.playerList = [];
  const player = new Player('12', 'taza');
  currentGame.setAdmin(player);
  isPlayersInGame(currentGame);
  disconnectPlayer(socket, currentGame);
  startGame(null, socket, currentGame);
  increaseBagIndex(socket, player, currentGame);
  updateOpponentList(socket, currentGame, player);
  giveLinesToOpponents(socket, player, currentGame);
  isGameRunning(socket, currentGame, player);
  giveInfoToPlayer(socket, '145', 'tata');
  playerHasLoose(socket, currentGame);
  resetServerState(socket, currentGame);
  wrongInfo(socket);
  socket.emit('disconnect');
  socket.emit('startGame', {});
  socket.emit('increaseBagIndex', [], false, 450);
  socket.emit('giveLinesToOpponents', 0, []);
  socket.emit('playerHasLoose', '124');
});

