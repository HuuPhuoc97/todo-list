import { put, takeEvery, call } from 'redux-saga/effects';
import * as API from './home.api';
import * as types from './home.types';
import * as actions from './home.action';
import { setLoading } from '../../layouts/loading/loading.action';

export function* fetchTodoSaga(action) {
  const { params = {} } = action;
  try {
    yield put(setLoading(true));
    const todoList = yield call(API.fetchTodo, params);
    yield put(actions.fetchTodoSuccess({ todoList }));
  } catch (error) {
    yield put(actions.fetchTodoFailure(error));
  } finally {
    yield put(setLoading(false));
  }
}

export function* homeSaga() {
  yield takeEvery(types.FETCH_TODO_LIST_REQUEST, fetchTodoSaga);
}
