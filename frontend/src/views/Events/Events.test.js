import React from 'react';
import { shallow } from 'enzyme';

import Events from './Events';
import Container from './index';

it('renders without crashing', () => {
  shallow(<Events />);
});
