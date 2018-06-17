import { FB_AUTH_SUCCESS, FB_AUTH_ERR } from '../constants/actionTypes';

const initialState = {
  name: 'Axel Niklasson',
  picture: null,
  diveCount: 68,
  authenticated: false,
  fbData: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FB_AUTH_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        authenticated: true,
        fbData: action.payload
      }; 

    case FB_AUTH_ERR:
      return {
        ...state,
        fbData: {},
        authenticated: false
      };

    default:
      return state;
  }
};

export default user;
