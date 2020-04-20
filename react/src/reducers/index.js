import { combineReducers } from 'redux';
import user from './user';
import userInscription from './userInscription';
import geolocation from './geolocation';

export default combineReducers({
  user, userInscription, geolocation
});
