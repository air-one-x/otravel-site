import { combineReducers } from 'redux';
import user from './user';
import userInscription from './userInscription';

export default combineReducers({
  user, userInscription,
});
