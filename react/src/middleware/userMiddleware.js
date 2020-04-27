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
        console.log('requête_connexion ------------------------------------>', res.data);
        localStorage.setItem('id_token', res.data.token);
         
        axios({
          url: 'http://localhost:8001/isLogged',
          method: 'post',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
        }
        })
          .then((res) => {
              console.log('<---------------middleware--------------------->' ,res.data);
              store.dispatch(loginSuccess(res.data));
              localStorage.setItem('img',res.data.avatar);
          })
          .catch((error) => {
           
          });
        

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
              localStorage.removeItem('img');
              localStorage.removeItem('test');
            store.dispatch(logoutSuccess(res.data.info));
          })
          .catch((err) => {
            console.log('wwwwwwwwwwwwwweccccccchhhhhhhhhh',err);
          });
        break;
        case CHECK_AUTH:
          axios({
            url: 'http://localhost:8001/isLogged',
            method: 'post',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
          }
          })
            .then((res) => {
              if (res.data) {
                console.log('middleware !!!r ->>>>>>>>>>>>>>>>>>>' ,res.data);

                store.dispatch(loginSuccess(res.data));
              }
            })
            .catch((error) => {
              console.log('------------------------------------------------------> JE PASSE',error);
              localStorage.removeItem('id_token');
              localStorage.removeItem('picturePlace');
              localStorage.removeItem('img');

            });
          break;
    default:
      next(action);
  }
};
