import * as types from './todoItem.types';

const initialState = {
  todoDetail: null,
  error: null,
};

const todoItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODO_ITEM_DETAIL_REQUEST:
      return { ...state };
    case types.FETCH_TODO_ITEM_DETAIL_SUCCESS:
      return { ...state, todoDetail: action.data.todoDetail };
    case types.FETCH_TODO_ITEM_DETAIL_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default todoItemReducer;
