import Enzyme from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import {INDESTRUCTIBLE} from "../../constants/optionsConstants";
import OptionsButton from "../../components/OptionsButton";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({
    gameOptions: {
      gameType: INDESTRUCTIBLE,
      colorBlind: false,
      boardSize: {
        width: 10,
        height: 20,
      },
      levelStart: 1,
    },
  });
  const wrapper = Enzyme.mount(<Provider store={store}><OptionsButton/></Provider>);
});
