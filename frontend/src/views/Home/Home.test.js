import React from 'react';
import Home from './Home.js';
import { shallow } from 'enzyme';

import { shallowWithStore } from '../../common/utils';
import Container from './index';

describe('Home Component', () => {
  const wrapper = shallow(<Home authenticated={true} isAuthenticated={jest.fn()} />);
  it('renders without crashing', () => {
    expect(wrapper);
  });
});

describe('Home Container', () => {
  const component = shallowWithStore(<Container />, {
    auth: {
      isAuthenticated: true,
    },
  });
  it('renders while connected', () => {
    expect(component.props()).toEqual(
      expect.objectContaining({
        authenticated: true,
        isAuthenticated: expect.any(Function),
      })
    );
  });
});
