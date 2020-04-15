import { combineReducers } from 'redux';
import navButtons from './navButton';
import user from './user';

export default combineReducers({
  navButtons, user,
});
