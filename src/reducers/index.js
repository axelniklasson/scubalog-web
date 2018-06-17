import { combineReducers } from 'redux';
import user from './user';
import dives from './dives';
import feed from './feed';

export default combineReducers({
  dives,
  user,
  feed
});
