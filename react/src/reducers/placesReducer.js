import { ADD_LOCATION_PLACE, FETCH_PLACES_SUCCESS, IS_FILTER_SHOWER, ADD_FILTER, REMOVE_FILTER_SHOWER, IS_FILTER_TOILET, RESET_LOCATION_PLACE, REMOVE_FILTER_TOILET} from '../actions/places';

export const initialState = {
    list: [],
    isFilterShower: false,
    isFilterToilet: false,
    filter: null,
    newList: [],
    locationPlace: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                list: [...action.payload],

            };

        case IS_FILTER_SHOWER:
            return {
                ...state,
                isFilterShower: !state.isFilterShower,
                filter: 1
            };

        case ADD_FILTER:
            return {
                ...state,
                newList:[...state.newList, ...action.payload],
               
            };

        case REMOVE_FILTER_SHOWER: 
        return {
            ...state,
            newList:action.payload,
            isFilterShower: !state.isFilterShower,
            filter: null,
        };

        case IS_FILTER_TOILET :
            return {
                ...state,
                isFilterToilet: !state.isFilterToilet,
                filter: 2
            }; 

        case REMOVE_FILTER_TOILET: 
        return {
            ...state,
            newList:action.payload,
            isFilterToilet: !state.isFilterToilet,
            filter: null,
        };
        case ADD_LOCATION_PLACE: 
        return {
            ...state,
            locationPlace:action.payload,
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