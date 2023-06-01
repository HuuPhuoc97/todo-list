import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './todoItem.action';
import * as types from './todoItem.types';
import * as API from './todoItem.api';
import { setLoading } from '../../layouts/loading/loading.action';
import Service from '../../services';

export function* fetchTodoItemDetailSaga(action) {
  const { params = {} } = action;
  try {
    yield put(setLoading(true));

    const todoDetail = yield call(API.getTodoItemDetail, params);
    yield put(actions.fetchTodoItemDetailSuccess({ todoDetail }));
  } catch (error) {
    yield put(actions.fetchTodoItemDetailFailure(error));
  } finally {
    yield put(setLoading(false));
  }
}

export function* postTodoItemSaga(action) {
  const { data = {}, onSuccess, onError } = action.params;
  try {
    yield put(setLoading(true));
    yield Service.post(`https://647700b99233e82dd53ab31c.mockapi.io/todo`, data, res => {
      if (res) onSuccess();
    });
  } catch (error) {
    if (error) onError(error);
    yield put(actions.postTodoItemFailure(error));
  } finally {
    yield put(setLoading(false));
  }
}

export function* putTodoItemSaga(action) {
  const { data, onSuccess, onError } = action.params;

  try {
    yield put(setLoading(true));
    yield Service.put(`https://647700b99233e82dd53ab31c.mockapi.io/todo/${data.idParam}`, data, res => {
      if (res) onSuccess();
    });
  } catch (error) {
    if (error) onError(error);
    yield put(actions.postTodoItemFailure(error));
  } finally {
    yield put(setLoading(false));
  }
}

export function* deleteTodoItemSaga(action) {
  const { params, onSuccess, onError } = action.params;

  try {
    yield put(setLoading(true));
    yield Service.delete(`https://647700b99233e82dd53ab31c.mockapi.io/todo/${params.id}`, null, res => {
      if (res) onSuccess();
    });
  } catch (error) {
    if (error) onError(error);
    yield put(actions.deleteTodoItemFailure(error));
  } finally {
    yield put(setLoading(false));
  }
}

export function* todoSaga() {
  yield takeEvery(types.FETCH_TODO_ITEM_DETAIL_REQUEST, fetchTodoItemDetailSaga);
  yield takeEvery(types.POST_TODO_ITEM_REQUEST, postTodoItemSaga);
  yield takeEvery(types.PUT_TODO_ITEM_REQUEST, putTodoItemSaga);
  yield takeEvery(types.DELETE_TODO_ITEM_REQUEST, deleteTodoItemSaga);
}
