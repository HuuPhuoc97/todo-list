import * as actions from './loading.types';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return { ...state, loading: action.data };

    default:
      return state;
  }
};

export default loadingReducer;
