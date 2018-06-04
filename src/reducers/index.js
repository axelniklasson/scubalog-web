import { combineReducers } from 'redux';
import user from './user';
import dives from './dives';

export default combineReducers({
  dives,
  user
});
