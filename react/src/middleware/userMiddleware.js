import axios from 'axios';
import { LOGIN, loginSuccess, LOGOUT, logoutSuccess, CHECK_AUTH, loginError } from '../actions/connexion';
import { INSERT_NEW_INFORMATION, updateMessage } from '../actions/account';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'http://ec2-107-20-110-81.compute-1.amazonaws.com/login',
        withCredentials: true,
        data: {
          username: store.getState().user.form.email,
          password: store.getState().user.form.password,
        },
      }).then((res) => {
        // Si succès -> dispatcher une action success
        localStorage.setItem('id_token', res.data.token);
         
        axios({
          url: '/isLogged',
          method: 'post',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
        }
        })
          .then((res) => {
              store.dispatch(loginSuccess(res.data));
              localStorage.setItem('img',res.data.avatar);
          })
          .catch((error) => {
           
          });
        

      })
        .catch((err) => {
        // Si error -> Dispatcher une action error
          store.dispatch(loginError());
        });
      break;
      case LOGOUT:
        axios({
          method: 'post',
          url: 'http://ec2-107-20-110-81.compute-1.amazonaws.com/logout',
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
          });
        break;
        case CHECK_AUTH:
          axios({
            url: 'http://ec2-107-20-110-81.compute-1.amazonaws.com/isLogged',
            method: 'post',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
          }
          })
            .then((res) => {
              if (res.data) {

                store.dispatch(loginSuccess(res.data));
              }
            })
            .catch((error) => {
              localStorage.removeItem('id_token');
              localStorage.removeItem('picturePlace');
              localStorage.removeItem('img');

            });
          break;
          case INSERT_NEW_INFORMATION:
            const id = store.getState().user.userInfos.id;
            axios({
              method: 'post',
              url: `http://ec2-107-20-110-81.compute-1.amazonaws.com/user/edit/${id}`,
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
              },
              data: {
                username: store.getState().user.updateUserInfo.newUserPseudo,
                email: store.getState().user.updateUserInfo.newUserEmail,
                password: store.getState().user.updateUserInfo.newUserPassword,
              },
            }).then((res) => {
                if (res.data) {
                  store.dispatch(updateMessage(res.data.message));
                  axios({
                    url: 'http://ec2-107-20-110-81.compute-1.amazonaws.com/isLogged',
                    method: 'post',
                    withCredentials: true,
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
                  }
                  })
                    .then((res) => {
                      if (res.data) {
                        store.dispatch(loginSuccess(res.data));
                        localStorage.setItem('img',res.data.avatar);
                      }
                    })
                    .catch((error) => {
                    });
                }
              })
              .catch((error) => {
              });
            break;
    default:
      next(action);
  }
};
