import { CHANGE_EMAIL, CHANGE_PASSWORD, LOGIN_SUCCESS } from '../actions/connexion';

const stateInit = {
  form: {
    email: 'toto@toto.fr',
    password: 'totototo',
  },
  isLogged: false,
  userInfos: {},
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        form: {
          email: action.payload,
        },
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        form: {
          password: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfos: {
          ...action.payload,
        },
        isLogged: true,
      };
    default:
      return state;
  }
};
