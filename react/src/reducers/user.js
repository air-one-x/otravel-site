import { CHANGE_EMAIL, CHANGE_PASSWORD, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR } from '../actions/connexion';

const stateInit = {
  form: {
    email: 'azerty@azerty.fr',
    password: 'azertyazerty',
  },
  isLogged: false,
  error: '',
  userInfos: {},
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        form: {
          ...state.form,
          email: action.payload,
        },
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        form: {
          ...state.form,
          password: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfos: {
          ...action.payload,
        },
        form : {
          email: '',
          password: '',
        },
        isLogged: true,
      };
      case LOGOUT_SUCCESS:
      return {
        ...state,
        form: {
          email: '',
          password: '',
        },
        isLogged: false,
        infos: {},
      };
      case LOGIN_ERROR:
        return {
          ...state,
          isLogged: false,
          error: 'Identifiants incorrects',
        };
    default:
      return state;
  }
};
