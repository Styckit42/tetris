import {aliveCount, giveLinesDestructibles, giveLinesIndestructible, randomHole} from "../../helpers/Funcs";
import Game from "../../entities/Game";
import io from './Socket.mock';

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
  aliveCount(socket, new Game('12'));
  giveLinesIndestructible(4, [], new Game('12'), socket);
  giveLinesDestructibles(4, [], new Game('12'), socket);
  randomHole(10);
});

