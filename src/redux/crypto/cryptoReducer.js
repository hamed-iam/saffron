import {
  FETCH_CRYPTO_FAILURE,
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS,
} from './cryptoTypes';

const initialState = {
  loading: false,
  crypto: [],
  error: '',
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CRYPTO_SUCCESS:
      return {
        ...state,
        loading: false,
        crypto: action.payload,
        error: '',
      };
    case FETCH_CRYPTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        crypto: [],
      };

    default:
      return state;
  }
};

export default cryptoReducer;
