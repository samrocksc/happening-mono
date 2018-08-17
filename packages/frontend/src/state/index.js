import { combineReducers } from 'redux';
import { events, colors } from 'happening-state';

const reducers = combineReducers({
  events,
  colors,
});

export default reducers;
