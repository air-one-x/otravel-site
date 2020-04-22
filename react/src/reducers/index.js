import { combineReducers } from 'redux';
import user from './user';
import userInscription from './userInscription';
import geolocation from './geolocation';
import placesReducer from './placesReducer';

export default combineReducers({
  user, userInscription, geolocation, placesReducer
});
