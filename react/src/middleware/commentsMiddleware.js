import axios from 'axios';
import { SEND_COMMENT, commentCreatedSuccess} from '../actions/comments';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_COMMENT:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'https://ec2-107-20-110-81.compute-1.amazonaws.com/commentary/add',
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
        data: {
          text: store.getState().commentsReducer.form.comment,
          places_id: store.getState().placesReducer.idClickPlace,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        store.dispatch(commentCreatedSuccess(true))
      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          store.dispatch(commentCreatedSuccess(false))
        });
      break;
    default:
      next(action);
  }
};
