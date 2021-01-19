import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Victory from "../../components/Victory";
import configureMockStore from "redux-mock-store";
import Button from "../../components/Button";
import {PLAY_SOLO} from "../../constants/menuConstants";
import {expect} from "chai";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({});
  const wrapper = Enzyme.mount(<Provider store={store}><Victory /></Provider >);
});
