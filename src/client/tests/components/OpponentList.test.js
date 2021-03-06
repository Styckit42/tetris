import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import OpponentList from "../../components/OpponentList";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({
    opponentList: [
      'titi',
      'toto',
    ],
  });
  const wrapper = Enzyme.mount(<Provider store={store}><OpponentList /></Provider >);
});
