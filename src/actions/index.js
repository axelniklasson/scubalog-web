import * as types from '../constants/actionTypes';
import axios from 'axios';

export const onFbAuthSuccess = payload => ({
  type: types.FB_AUTH_SUCCESS,
  payload
});

export const onFbAuthError = payload => ({
  type: types.FB_AUTH_ERR,
  payload
});

export const fetchDiveLogStarted = () => ({
  type: types.FETCH_DIVE_LOG_STARTED
});

// add success/error actions for fetchDiveLog()

const fetchDiveLogSuccess = res => ({
  type: types.FETCH_DIVE_LOG_SUCCESS,
  payload: res
});

const fetchDiveLogError = err => ({
  type: types.FETCH_DIVE_LOG_ERR,
  payload: err
});

export function fetchDiveLog() {
  return dispatch => {
    dispatch(fetchDiveLogStarted());

    return axios.get('https://scubalog.axelniklasson.se/api/dives?diverID=597cbd0f88e02100111ad049&take=3')
      .then(res => dispatch(fetchDiveLogSuccess(res)))
      .catch(err => dispatch(fetchDiveLogError(err)))
  }
}
