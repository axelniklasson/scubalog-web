import { FB_AUTH_SUCCESS, FB_AUTH_ERR } from '../constants/actionTypes';

const initialState = {
  name: 'Axel Niklasson',
  authenticated: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FB_AUTH_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        authenticated: true
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
