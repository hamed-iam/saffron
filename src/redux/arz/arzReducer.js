import {
  FETCH_CUR_FAILURE,
  FETCH_CUR_REQUEST,
  FETCH_CUR_SUCCESS,
} from './arzTypes';

const initialState = {
  loading: false,
  currency: [],
  error: '',
};

const arzReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUR_SUCCESS:
      return {
        ...state,
        loading: false,
        currency: action.payload,
        error: '',
      };
    case FETCH_CUR_FAILURE:
      return {
        ...state,
        loading: false,
        currency: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default arzReducer;
