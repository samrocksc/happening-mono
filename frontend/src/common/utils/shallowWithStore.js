import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

const shallowWithStore = (component, state) => {
  const store = createMockStore(state);
  const generateState = (component, store) => {
    const context = {
      store,
    };
    return shallow(component, { context });
  };
  return generateState(component, store);
};

export default shallowWithStore;
