import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import SpectreList from "../../components/SpectreList";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({
    opponentList: [],
  });
  const wrapper = Enzyme.mount(<Provider store={store}><SpectreList /></Provider >);
});
