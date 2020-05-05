import axios from 'axios';
import { SEND_COMMENT, commentCreatedSuccess} from '../actions/comments';
import { fetchPlaces, 
  fetchShower, 
  fetchToilet, 
  fetchSpotKite,
  fetchSpotVan, 
  fetchLaundry,
  fetchMarketFarm, test } from '../actions/places';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_COMMENT:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/commentary/add',
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
        data: {
          text: store.getState().commentsReducer.form.comment,
          places_id: store.getState().placesReducer.idClickPlace,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        //store.dispatch(commentCreatedSuccess(true));
        console.log('je passe');
        store.dispatch(test());
        store.dispatch(fetchPlaces());
        
      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
        console.log('qqquuuuoi');
          store.dispatch(commentCreatedSuccess(false))
        });
      break;
    default:
      next(action);
  }
};
