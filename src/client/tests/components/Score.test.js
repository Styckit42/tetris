import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import Score from "../../components/Score";

const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});


it('renderWithoutCrashing', () => {
  const store = mockStore({
    score: 50,
    levels: 2,
    linesErased: 6,
    speed: 500,
  });
  const wrapper = Enzyme.mount(<Provider store={store}><Score /></Provider >);
});
