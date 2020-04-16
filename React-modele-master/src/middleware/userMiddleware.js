import axios from 'axios';
import { LOGIN, loginSucess } from '../actions/index';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'http://localhost:8001/login',
        withCredentials: true,
        data: {
          email: store.getState().user.form.email,
          password: store.getState().user.form.password,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        console.log('!!!!!!!', res.data);
        store.dispatch(loginSucess(res.data.info));
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
