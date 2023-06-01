import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { homeReducer } from '../modules/homePage';
import { todoItemReducer } from '../modules/todoItemPage';
import loadingReducer from '../layouts/loading/loading.reducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    todo: todoItemReducer,
    loading: loadingReducer,
  });

export default rootReducer;
