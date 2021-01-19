import Enzyme from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Menu from '../../components/Menu';

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({
    isAdmin: true,
    name: 'toto',
    opponentList: [],
  });
  Enzyme.mount(<Provider store={store}><Menu /></Provider>);
});
