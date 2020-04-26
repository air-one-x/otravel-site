import {
  ADD_LOCATION_PLACE,
  FETCH_PLACES_SUCCESS,
  IS_FILTER_SHOWER,
  ADD_FILTER,
  REMOVE_FILTER_SHOWER,
  IS_FILTER_TOILET,
  RESET_LOCATION_PLACE,
  REMOVE_FILTER_TOILET,
  ID_CLICK_PLACE,
} from '../actions/places';

export const initialState = {
  list: [],
  isFilterShower: false,
  isFilterToilet: false,
  filter: null,
  newList: [],
  locationPlace: {},
  idClickPlace: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ID_CLICK_PLACE:
      return {
        ...state,
        idClickPlace: action.payload,

      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        list: [...action.payload],

      };

    case IS_FILTER_SHOWER:
      return {
        ...state,
        isFilterShower: !state.isFilterShower,
          filter: 3
      };

    case ADD_FILTER:
      return {
        ...state,
        newList: [...state.newList, ...action.payload],

      };

    case REMOVE_FILTER_SHOWER:
      return {
        ...state,
        newList: action.payload,
          isFilterShower: !state.isFilterShower,
          filter: null,
      };

    case IS_FILTER_TOILET:
      return {
        ...state,
        isFilterToilet: !state.isFilterToilet,
          filter: 4
      };

    case REMOVE_FILTER_TOILET:
      return {
        ...state,
        newList: action.payload,
          isFilterToilet: !state.isFilterToilet,
          filter: null,
      };
    case ADD_LOCATION_PLACE:
      return {
        ...state,
        locationPlace: action.payload,
      };
    case RESET_LOCATION_PLACE:
      return {
        ...state,
        locationPlace: {},
      };
    default:
      return state;
  }
}
