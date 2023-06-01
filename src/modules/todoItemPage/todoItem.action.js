import * as types from './todoItem.types';

export const fetchTodoItemDetailRequest = params => ({ type: types.FETCH_TODO_ITEM_DETAIL_REQUEST, params });
export const fetchTodoItemDetailSuccess = data => ({ type: types.FETCH_TODO_ITEM_DETAIL_SUCCESS, data });
export const fetchTodoItemDetailFailure = error => ({ type: types.FETCH_TODO_ITEM_DETAIL_FAILURE, error });

export const postTodoItemRequest = params => ({ type: types.POST_TODO_ITEM_REQUEST, params });
export const postTodoItemSuccess = data => ({ type: types.POST_TODO_ITEM_SUCCESS, data });
export const postTodoItemFailure = error => ({ type: types.POST_TODO_ITEM_FAILURE, error });

export const putTodoItemRequest = params => ({ type: types.PUT_TODO_ITEM_REQUEST, params });
export const putTodoItemSuccess = data => ({ type: types.PUT_TODO_ITEM_SUCCESS, data });
export const putTodoItemFailure = error => ({ type: types.PUT_TODO_ITEM_FAILURE, error });

export const deleteTodoItemRequest = params => ({ type: types.DELETE_TODO_ITEM_REQUEST, params });
export const deleteTodoItemSuccess = data => ({ type: types.DELETE_TODO_ITEM_SUCCESS, data });
export const deleteTodoItemFailure = error => ({ type: types.DELETE_TODO_ITEM_FAILURE, error });
