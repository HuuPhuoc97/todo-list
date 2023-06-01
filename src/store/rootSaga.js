// eslint-disable-next-line no-unused-vars
import { all } from 'redux-saga/effects';

import { homeSaga } from '../modules/homePage';
import { todoSaga } from '../modules/todoItemPage';

export default function* rootSaga() {
  yield all([homeSaga(), todoSaga()]);
}
