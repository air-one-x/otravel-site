import axios from 'axios';
import { SEND_COMMENT, commentCreatedSuccess} from '../actions/comments';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_COMMENT:
      // Je veux lancer ma requête avec axios
      console.warn('MIDDLEWARE_COMMENT_SEND')
      axios({
        method: 'post',
        url: 'http://localhost:8001/commentary/add',
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
        data: {
          text: store.getState().commentsReducer.form.comment,
          places_id: store.getState().placesReducer.idClickPlace,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        console.log('FELICITATION POUR lAJOUT DU COMMENTTAIRE', res);
        store.dispatch(commentCreatedSuccess(true))
      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          console.error(err);
          store.dispatch(commentCreatedSuccess(false))
        });
      break;
    default:
      next(action);
  }
};
