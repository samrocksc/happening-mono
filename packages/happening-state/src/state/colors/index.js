import {promiseHandler} from 'cooldux';
import {List, fromJS, Map} from 'immutable';

import apiFetch from '../../client';

export const {browseStart, browseEnd, browseError, browseHandler} = promiseHandler('browse', 'colors');
export const {readHandler} = promiseHandler('read', 'colors');
export const {addHandler} = promiseHandler('edit', 'colors');
export const {editHandler} = promiseHandler('add', 'colors');
export const {delHandler} = promiseHandler('del', 'colors');

export const browseColors = async dispatch => {
  const data = await apiFetch('/colors');
  return browseHandler(data, dispatch);
};

export const readColor = async (dispatch, id) => {
  return readHandler(await apiFetch(`/colors/${id}`), dispatch);
};

export const editColor = async (dispatch, id, payload) => {
  return editHandler(await apiFetch(`/colors/${id}`, {method: 'POST', payload}), dispatch);
};

export const addColor = async (dispatch, id, payload) => {
  return addHandler(await apiFetch('/colors', {method: 'POST', payload}), dispatch);
};

export const delColor = async (dispatch, id) => {
  return delHandler(await apiFetch(`/colors/${id}`, {method: 'DELETE '}), dispatch);
};

const initialState = {
  browseError: null,
  readError: null,
  editError: null,
  addError: null,
  delError: null,
};

export const colors = (state = initialState, action) => {
  switch (action.type) {
    case browseStart.type:
      return {...state, isFetching: true};
    case browseEnd.type:
      return {...state, isFetching: false, data: fromJS(action.payload), error: false};
    case browseError.type:
      return {...state, isFetching: false, error: fromJS(action.payload)};
    default:
      return state;
  }
};

