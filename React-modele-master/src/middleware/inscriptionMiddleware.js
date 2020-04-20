import axios from 'axios';
import { INSCRIPTION_SUCCESS } from '../actions/inscription';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_SUCCESS:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'https://localhost:8001/inscription',
        withCredentials: true,
        data: {
          username: store.getState().userInscription.form.pseudo,
          avatar: store.getState().userInscription.form.avatar,
          email: store.getState().userInscription.form.email,
          password: store.getState().userInscription.form.password,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        console.log('FELICITATION GAETAN', res);
      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          console.error(err);
        });
      break;
    default:
      next(action);
  }
};
