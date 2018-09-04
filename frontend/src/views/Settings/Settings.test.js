import React from 'react';
import Settings from './Settings';
import { shallow } from 'enzyme';

it('renders without crashing with its props', () => {
  shallow(<Settings />);
});
