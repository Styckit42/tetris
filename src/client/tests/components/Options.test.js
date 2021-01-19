import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Options from "../../components/Options";
import WrongInfo from "../../components/WrongInfo";

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  Enzyme.shallow(<Options />);
});
