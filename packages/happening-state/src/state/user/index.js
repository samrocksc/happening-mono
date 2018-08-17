import {promiseHandler} from 'cooldux';
import {fromJS} from 'immutable';

import apiFetch from '../../client';

const {browseStart, browseEnd, browseError, browseHandler} = promiseHandler('browse', 'user');
const {readHandler} = promiseHandler('read', 'user');
const {addHandler} = promiseHandler('edit', 'user');
const {editHandler} = promiseHandler('add', 'user');
const {delHandler} = promiseHandler('del', 'user');

export const browseuser = async dispatch => {
  const data = await apiFetch('/user');
  return browseHandler(data, dispatch);
};

export const readEvent = async (dispatch, id) => {
  return readHandler(await apiFetch(`/user/${id}`), dispatch);
};

export const editEvent = async (dispatch, id, payload) => {
  return editHandler(await apiFetch(`/user/${id}`, {method: 'POST', payload}), dispatch);
};

export const addEvent = async (dispatch, id, payload) => {
  return addHandler(await apiFetch('/user', {method: 'POST', payload}), dispatch);
};

export const delEvent = async (dispatch, id) => {
  return delHandler(await apiFetch(`/user/${id}`, {method: 'DELETE '}), dispatch);
};

const initialState = {
  browseError: null,
  readError: null,
  editError: null,
  addError: null,
  delError: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case browseStart.type:
      return {...state, isFetching: true};
    case browseEnd.type:
      return {...state, isFetching: false, error: fromJS(action.payload)};
    case browseError.type:
      return {...state, isFetching: false, error: fromJS(action.payload)};
    default:
      return state;
  }
};
