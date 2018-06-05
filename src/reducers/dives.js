import { 
  FETCH_DIVE_LOG_STARTED,
  FETCH_DIVE_LOG_SUCCESS, 
  FETCH_DIVE_LOG_ERR 
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: []
};

const dives = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIVE_LOG_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DIVE_LOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      };
    case FETCH_DIVE_LOG_ERR:
      return {
        ...state,
        isFetching: false,
        data: []
      };
    default:
      return state;
  }
};

export default dives;
