import * as types from '../constants/actionTypes';

export const onFbAuthSuccess = payload => ({
  type: types.FB_AUTH_SUCCESS,
  payload
});

export const onFbAuthError = payload => ({
  type: types.FB_AUTH_ERR,
  payload
});
