import { promiseHandler } from 'cooldux';
import apiFetch from '../config/client';

const { browseStart, browseEnd, browseError, browseHandler } = promiseHandler('browse', 'colors');

export function browseUsers() {
  return function dispatcher(dispatch) {
    const promise = apiFetch('/colors');
    return browseHandler(promise, dispatch);
  };
}

const initialState = {
  browseError: null,
  addError: null,
};

function colors(state = initialState, action) {
  switch (action.type) {
    case browseStart.type:
      return { ...state, isFetching: true };
    case browseEnd.type:
      return { ...state, isFetching: false, error: action.payload };
    case browseError.type:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}

export default colors;
