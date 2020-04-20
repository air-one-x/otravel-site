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
          username: store.getState().user.form.email,
          password: store.getState().user.form.password,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        console.log('requête_connexion', res);
        localStorage.setItem('id_token', res.data.token);
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
            localStorage.removeItem('id_token');
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
            headers: {
              'authorization': 'beare' + localStorage.getItem('id_token'),
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }
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
