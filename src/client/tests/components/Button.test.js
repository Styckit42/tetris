import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from "chai";
import configureMockStore from 'redux-mock-store';
import {PLAY_SOLO} from "../../constants/menuConstants";
import Button from "../../components/Button";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({});
  const wrapper = Enzyme.mount(<Provider store={store}><Button label={'string'} action={PLAY_SOLO}/></Provider>);
  expect(wrapper.find('button')).to.have.lengthOf(1);
});
