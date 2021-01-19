import Enzyme from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import NextPiece from "../../components/NextPiece";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const store = mockStore({
    nextPiece: {
      type: 'J',
      state: 'STATE_0',
      bricks: [{ x: 3, y: 2, color: '#B62536' }, { x: 3, y: 3, color: '#B62536' },
        { x: 4, y: 3, color: '#B62536' }, { x: 5, y: 3, color: '#B62536' }],
    },
  });
  const wrapper = Enzyme.mount(<Provider store={store}><NextPiece/></Provider>);
});
