import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import GameOver from "../../components/GameOver";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const socket = {};
  socket.emit = jest.fn((x) => true);
  global.socket = socket;
  const store = mockStore({
    score: 500,
    levels: 5,
    playerId: '10df',
  });
  const wrapper = Enzyme.mount(<Provider store={store}><GameOver /></Provider >);
});
