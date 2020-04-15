import { CHANGE_EMAIL, CHANGE_PASSWORD, LOGIN_SUCCESS } from '../actions/index';

const stateInit = {
  form: {
    email: 'bouclierman@herocorp.io',
    password: 'jennifer',
  },
  isLogged: false,
  infos: {},
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
        infos: {
          ...action.payload,
        },
        isLogged: action.payload.logged,
      };
    default:
      return state;
  }
};
