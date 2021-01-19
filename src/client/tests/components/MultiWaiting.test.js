import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import MultiWaiting from '../../components/MultiWaiting';

Enzyme.configure({adapter: new Adapter()});

it('renderWithoutCrashing', () => {
  Enzyme.shallow(<MultiWaiting />);
});
