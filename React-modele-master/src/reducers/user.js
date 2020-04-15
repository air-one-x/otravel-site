import { CHANGE_EMAIL } from '../actions/index';

const stateInit = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
