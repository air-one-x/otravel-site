import { GEOLOCATION, NAME_PLACE, CATEGORY_PLACE, DESCRIPTION_PLACE, STREET_PLACE, ZIPCODE_PLACE, CITY_PLACE } from '../actions/geolocation';

const initialState = {
    coords: {
        lat: 52.4760892,
        long: -71.8258668,
    },
    form : {
      name: 'plage des cocotiers',
      category: [1],
      description: 'une belle douche',
      street : 'Avenue montaigne',
      zipCode: 14000,
      city: 'city gang',
    },
    isLocated: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case GEOLOCATION:
        return {
          ...state,
          coords: {
            lat: action.payload.latitude,
            long: action.payload.longitude,
        },
        isLocated: true,
        };
        case NAME_PLACE:
        return {
          ...state,
         form : {
           ...state.form,
           name: action.payload,
         },
        };
        case CATEGORY_PLACE:
          return {
            ...state,
         form : {
           ...state.form,
           category: [action.payload],
         },
          };
        case DESCRIPTION_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            description: action.payload,
            },
          };
        case STREET_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            street: action.payload,
         },
              };
        case ZIPCODE_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            zipCode: action.payload,
         },
          };
          case CITY_PLACE:
            return {
              ...state,
         form : {
           ...state.form,
           city: action.payload,
         },
         };
                              

        default:
      return state;
  }
};