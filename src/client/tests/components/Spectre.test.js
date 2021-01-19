import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Spectre from "../../components/Spectre";

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  const props = {
    name: 'test',
    stack: [{ x: 0, y: 19 }, { x: 1, y: 19 }, { x: 2, y: 19 }, { x: 3, y: 19 }],
    score: 500,
  };
  Enzyme.shallow(<Spectre name={props.name} stack={props.stack} score={props.score} />);
});
