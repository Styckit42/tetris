import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import Socket from "../../components/Socket";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const socket = {};
  socket.emit = jest.fn((x) => true);
  socket.on = jest.fn((x) => true);
  global.socket = socket;
  const store = mockStore({});
  const wrapper = Enzyme.mount(<Provider store={store}><Socket /></Provider >);
});

