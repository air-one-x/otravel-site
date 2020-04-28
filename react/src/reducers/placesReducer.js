import {
  ADD_LOCATION_PLACE,
  FETCH_PLACES_SUCCESS,
  IS_FILTER_SHOWER,
  IS_FILTER_TOILET,
  RESET_LOCATION_PLACE,
  ID_CLICK_PLACE,
  FETCH_SHOWER_SUCCESS,
  FETCH_TOILET_SUCCESS
} from '../actions/places';

export const initialState = {
  list: [],
  isFilterShower: true,
  isFilterToilet: true,
  filter: null,
  newList: [],
  listShower:[],
  listToilet:[],
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
      console.log(action.payload)
      return {
        ...state,
        list: [...action.payload],

      };
    case FETCH_SHOWER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        listShower: [...action.payload],

      };
      case FETCH_TOILET_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          listToilet: [...action.payload],
  
        };
    case IS_FILTER_SHOWER:
      return {
        ...state,
        isFilterShower: !state.isFilterShower,
          //filter: 3
      };
    case IS_FILTER_TOILET:
      return {
        ...state,
        isFilterToilet: !state.isFilterToilet,
         // filter: 4
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
          // case ADD_FILTER:
    //   return {
    //     ...state,
    //     newList: [...state.newList, ...action.payload],

    //   };
      // case REMOVE_FILTER_TOILET:
      //   return {
      //     ...state,
      //     newList: action.payload,
      //       isFilterToilet: !state.isFilterToilet,
      //       filter: null,
      //   };
      //   case REMOVE_FILTER_SHOWER:
      //   return {
      //     ...state,
      //     newList: action.payload,
      //       isFilterShower: !state.isFilterShower,
      //       filter: null,
      //   };
    default:
      return state;
  }
}
