import * as types from './home.types';

const initialState = {
  todoList: null,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODO_LIST_REQUEST:
      return { ...state };
    case types.FETCH_TODO_LIST_SUCCESS:
      return { ...state, todoList: action.data.todoList };
    case types.FETCH_TODO_LIST_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default homeReducer;
