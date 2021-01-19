import Enzyme from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import Piece from "../../components/Piece";

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const bricks = [{ x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 10 }, { x: 5, y: 11 },];
  const width = 10;
  const isShadow = true;
  Enzyme.mount(<Piece bricks={bricks} width={width} isShadow={isShadow} />);
});
