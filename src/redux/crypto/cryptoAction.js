import axios from 'axios';
import {
  FETCH_CRYPTO_FAILURE,
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS,
} from './cryptoTypes';

export const fetchCryptoRequest = () => {
  return {
    type: FETCH_CRYPTO_REQUEST,
  };
};

export const fetchCryptoSuccess = (crypto) => {
  return {
    type: FETCH_CRYPTO_SUCCESS,
    payload: crypto,
  };
};

export const fetchCryptoFailure = (error) => {
  return {
    type: FETCH_CRYPTO_FAILURE,
    payload: error,
  };
};

const url = 'https://api.coinlore.net/api/tickers/';

export const fetchCrypto = () => {
  return function (dispatch) {
    dispatch(fetchCryptoRequest());
    axios
      .get(url)
      .then((res) => {
        const crypto = res.data;
        dispatch(fetchCryptoSuccess(crypto));
      })
      .catch((error) => {
        dispatch(fetchCryptoFailure(error.message));
      });
  };
};
