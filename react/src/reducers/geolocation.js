import { GEOLOCATION } from '../actions/geolocation';

const initialState = {
    coords: {
        lat: 52.4760892,
        long: -71.8258668,
    },
    isLocated: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case GEOLOCATION:
        console.log('reducer',action.payload.latitude)
        return {
          ...state,
          coords: {
            lat: action.payload.latitude,
            long: action.payload.longitude,
        },
        isLocated: true,
        };
        default:
      return state;
  }
};