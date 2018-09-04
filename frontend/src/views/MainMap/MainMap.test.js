import React from 'react';
import MainMap from './MainMap';
import { shallow } from 'enzyme';

it('renders without crashing with its props', () => {
  shallow(<MainMap />);
});
