import React from 'react';
import { shallow } from 'enzyme';

import Callback from './Callback';
import { shallowWithStore } from '../../common/utils';
import Container from './index';

describe('Callback Component', () => {
  const component = shallow(<Callback loaded={true} handleAuthentication={jest.fn()} />);
  it('renders without crashing', () => {
    expect(component);
  });
});
describe('Callback Container', () => {
  const component = shallowWithStore(<Container />, {
    auth: {
      handleAuthentication: true,
    },
  });

  it('renders from a container', () => {
    expect(component.props()).toEqual(
      expect.objectContaining({
        loaded: expect.any(Boolean),
        handleAuthentication: expect.any(Function),
      })
    );
  });
});
