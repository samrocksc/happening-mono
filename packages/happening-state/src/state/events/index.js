import { promiseHandler } from 'cooldux';
import { List, fromJS, Map } from 'immutable';

import apiFetch from '../../client';

const { browseStart, browseEnd, browseError, browseHandler } = promiseHandler('browse', 'events');
const { readHandler } = promiseHandler('read', 'events');
const { addHandler } = promiseHandler('edit', 'events');
const { editHandler } = promiseHandler('add', 'events');
const { delHandler } = promiseHandler('del', 'events');

export const browseEvents = async dispatch => {
  const data = await apiFetch('/events');
  return browseHandler(data, dispatch);
};

export const readEvent = async (dispatch, id) => {
  return readHandler(await apiFetch(`/events/${id}`), dispatch);
};

export const editEvent = async (dispatch, id, payload) => {
  return editHandler(await apiFetch(`/events/${id}`, { method: 'POST', payload }), dispatch);
};

export const addEvent = async (dispatch, id, payload) => {
  return addHandler(await apiFetch('/events', { method: 'POST', payload }), dispatch);
};

export const delEvent = async (dispatch, id) => {
  return delHandler(await apiFetch(`/events/${id}`, { method: 'DELETE ' }), dispatch);
};

const initialState = {
  data: 'test',
  browseError: null,
  readError: null,
  editError: null,
  addError: null,
  delError: null,
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case browseStart.type:
      return { ...state, isFetching: true }
    case browseEnd.type:
      return { ...state, isFetching: false, error: fromJS(action.payload) };
    case browseError.type:
      return { ...state, isFetching: false, error: fromJS(action.payload) };
    default:
      return state;
  }
};

