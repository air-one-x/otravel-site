import { ACTIVE_BUTTON_FILTER, ACTIVE_BUTTON_ADD,REMOVE_FILTER } from '../actions';

const initialState = {
  isButtonActivate: false,
  value: "all",
};

const NavButtons = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIVE_BUTTON_FILTER:
      return {
        ...state,
        isButtonActivate: true,
        value: "filter"
      };
    case ACTIVE_BUTTON_ADD:
      return {
        ...state,
        isButtonActivate: true,
        value: "add"
      };
    case REMOVE_FILTER:
    return {
      ...state,
      isButtonActivate: false,
      value: "all"
    };
    default:
      return state;
  }
};

export default NavButtons;
