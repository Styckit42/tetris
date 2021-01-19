import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import Brick from '../../components/Brick';
import { IN_MENU } from '../../constants/statusConstants';
import { INDESTRUCTIBLE } from '../../constants/optionsConstants';
import reducer from '../../reducers/save';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('renderWithoutCrashing', () => {
  const props1 = {
    brick: { x: 0, y: 0, isSpectre: false },
    isShadow: false,
  };
  const wrapper1 = Enzyme.mount(<Brick brick={props1.brick} isShadow={props1.isShadow} />);
  expect(wrapper1.find('div')).to.have.lengthOf(1);
  const props2 = {
    brick: { x: 0, y: 0, isSpectre: false },
    isShadow: true,
  };
  const wrapper2 = Enzyme.mount(<Brick brick={props2.brick} isShadow={props2.isShadow} />);
  expect(wrapper2.find('div')).to.have.lengthOf(1);
});

