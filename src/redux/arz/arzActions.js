import axios from 'axios';
import {
  FETCH_CUR_FAILURE,
  FETCH_CUR_REQUEST,
  FETCH_CUR_SUCCESS,
} from './arzTypes';

export const fetchCurRequest = () => {
  return {
    type: FETCH_CUR_REQUEST,
  };
};

export const fetchCurSuccess = (currency) => {
  return {
    type: FETCH_CUR_SUCCESS,
    payload: currency,
  };
};

export const fetchCurFailure = (error) => {
  return {
    type: FETCH_CUR_FAILURE,
    payload: error,
  };
};

const url = 'https://api.accessban.com/v1/data/sana/json';

export const fetchCur = () => {
  return function (dispatch) {
    dispatch(fetchCurRequest());

    axios
      .get(url)
      .then((res) => {
        const currency = res.data.sana.data;
        dispatch(fetchCurSuccess(currency));
      })
      .catch((error) => {
        dispatch(fetchCurFailure(error.message));
      });
  };
};
