import Enzyme from 'enzyme';
import React from 'react';
import WrongInfo from '../../components/WrongInfo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  Enzyme.shallow(<WrongInfo />);
});
