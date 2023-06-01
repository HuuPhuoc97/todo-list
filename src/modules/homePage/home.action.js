import * as types from './home.types';

export const fetchTodoRequest = params => ({ type: types.FETCH_TODO_LIST_REQUEST, params });
export const fetchTodoSuccess = data => ({ type: types.FETCH_TODO_LIST_SUCCESS, data });
export const fetchTodoFailure = error => ({ type: types.FETCH_TODO_LIST_FAILURE, error });
