export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES = 'FETCH_PLACES';

export const fetchPlaces = () => ({
    type: FETCH_PLACES,
});
export const fetchPlacesSuccess = (payload) => ({
    type: FETCH_PLACES_SUCCESS,
    payload,
});

