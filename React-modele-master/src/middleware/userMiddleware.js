import axios from 'axios';
import { LOGIN, loginSuccess, LOGOUT, logoutSuccess, CHECK_AUTH, loginError } from '../actions/connexion';


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
        console.log('requête_connexion', res);
        store.dispatch(loginSuccess(res.data[0]));
      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          console.error(err);
          store.dispatch(loginError());
        });
      break;
      case LOGOUT:
        axios({
          method: 'post',
          url: 'http://localhost:8001/logout',
          withCredentials: true,
        })
          .then((res) => {
          // Si succès -> dispatcher une action success
            store.dispatch(logoutSuccess(res.data.info));
          })
          .catch((err) => {
            console.log(err);
          });
        break;
        case CHECK_AUTH:
          axios({
            url: 'http://localhost:8001/isLogged',
            method: 'post',
            withCredentials: true,
          })
            .then((res) => {
              if (res.data.logged) {
                console.log('middleware !!!' ,res.data);
                store.dispatch(loginSuccess(res.data.info));
              }
            })
            .catch((error) => {
              console.log(error);
            });
          break;
    default:
      next(action);
  }
};
