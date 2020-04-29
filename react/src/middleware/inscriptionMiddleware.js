import axios from 'axios';
import { INSCRIPTION_SUCCESS, inscriptionError, checkEmail } from '../actions/inscription';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case INSCRIPTION_SUCCESS:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'http://ec2-107-20-110-81.compute-1.amazonaws.com/inscription',
        withCredentials: true,
        data: {
          username: store.getState().userInscription.form.pseudo,
          avatar: store.getState().userInscription.form.avatar,
          email: store.getState().userInscription.form.email,
          password: store.getState().userInscription.form.password,
          nameFile: store.getState().userInscription.form.nameFile
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        store.dispatch(checkEmail(true))


      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          store.dispatch(checkEmail(false))
          store.dispatch(inscriptionError('l\'email ou le pseudo  est déja utilisé '))
        });
      break;
    default:
      next(action);
  }
};
