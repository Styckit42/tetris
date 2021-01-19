import Enzyme from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Lobby from '../../components/Lobby';

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store1 = mockStore({
    isAdmin: true,
    opponentList: [],
  });
  const store2 = mockStore({
    isAdmin: false,
    opponentList: [],
  });
  Enzyme.mount(<Provider store={store1}><Lobby /></Provider>);
  Enzyme.mount(<Provider store={store2}><Lobby /></Provider>);
});
