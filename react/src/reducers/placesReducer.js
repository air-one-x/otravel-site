import { FETCH_PLACES_SUCCESS} from '../actions/places';

export const initialState = {
    list: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                list: [...action.payload],

            };

            default:
                return state;
    }
}