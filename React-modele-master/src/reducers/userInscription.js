import { CHANGE_NEW_PSEUDO, CHANGE_NEW_EMAIL, CHANGE_NEW_PASSWORD, INSCRIPTION_SUCCESS, ADD_AVATAR } from '../actions/inscription';

const stateInit = {
  form: {
    pseudo: '',
    avatar: '',
    email: '',
    password: '',
  },
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case ADD_AVATAR:
      return {
        ...state,
        form: {
          ...state.form,
          avatar: action.payload,
        },
      };
    case CHANGE_NEW_PSEUDO:
        return {
          ...state,
          form: {
            ...state.form,
            pseudo: action.payload,
          },
        };
    case CHANGE_NEW_EMAIL:
      return {
        ...state,
        form: {
          ...state.form,
          email: action.payload,
        },
      };
    case CHANGE_NEW_PASSWORD:
      return {
        ...state,
        form: {
          ...state.form,
          password: action.payload,
        },
      };
    case INSCRIPTION_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
