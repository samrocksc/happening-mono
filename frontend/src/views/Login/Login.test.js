import React from 'react';
import Login from './Login.js';
import { shallow } from 'enzyme';

import { shallowWithStore } from '../../common/utils';
import Container from './index';

describe('Login Component', () => {
  const component = shallow(<Login login={jest.fn()} />);
  it('renders without crashing with its props', () => {
    expect(component);
  });
});

describe('Login Container', () => {
  const component = shallowWithStore(<Container />, {
    auth: {},
  });
  it('renders while connected', () => {
    expect(component.props()).toEqual(
      expect.objectContaining({
        login: expect.any(Function),
      })
    );
  });
});
