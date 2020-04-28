export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES = 'FETCH_PLACES';
export const IS_FILTER_SHOWER='IS_FILTER_SHOWER';
// export const CHECK_FILTER = 'CHECK_FILTER';
export const ADD_FILTER= 'ADD_FILTER';
// export const REMOVE_SHOWER= 'REMOVE_SHOWER';
// export const REMOVE_FILTER_SHOWER= 'REMOVE_FILTER_SHOWER'
export const IS_FILTER_TOILET='IS_FILTER_TOILET';
// export const REMOVE_TOILET = 'REMOVE_TOILET';
// export const REMOVE_FILTER_TOILET = 'REMOVE_FILTER_TOILET';
export const ADD_LOCATION_PLACE = 'ADD_LOCATION_PLACE';
export const RESET_LOCATION_PLACE = 'RESET_LOCATION_PLACE';
export const ID_CLICK_PLACE = 'ID_CLICK_PLACE';
export const FETCH_SHOWER = 'FETCH_SHOWER';
export const FETCH_SHOWER_SUCCESS = 'FETCH_SHOWER_SUCCESS';
export const FETCH_TOILET_SUCCESS = 'FETCH_TOILET_SUCCESS';
export const FETCH_TOILET = 'FETCH_TOILET';

export const idClickPlace = (payload) => ({
    type: ID_CLICK_PLACE,
    payload,
})
export const resetClickLocation = () => ({
    type: RESET_LOCATION_PLACE,
})
export const addLocationPlace = (payload) => ({
    type: ADD_LOCATION_PLACE,
    payload,
})
//action renvoyé par le middleware placesMiddleware
export const addFilter = (payload) => ({
    type: ADD_FILTER,
    payload,
});

// export const removeFilterShower = (payload) => ({
//     type: REMOVE_FILTER_SHOWER,
//     payload
// });

// export const removeFilterToilet = (payload) => ({
//     type: REMOVE_FILTER_TOILET,
//     payload
// });
//action qui se fait intercépter par le middleware placesMiddleware
// export const checkFilter = () => ({
//     type: CHECK_FILTER,
// });

// export const removeShower = (payload) => ({
//     type: REMOVE_SHOWER,
//     payload
// });

// export const removeToilet = (payload) => ({
//     type: REMOVE_TOILET,
//     payload
// });

// autres actions 

export const isFilterShower = () => ({
    type: IS_FILTER_SHOWER,
});

export const isFilterToilet = () => ({
    type: IS_FILTER_TOILET,
});
export const fetchShowerSuccess = (payload) => ({
    type:FETCH_SHOWER_SUCCESS,
    payload
})
export const fetchToiletSuccess = (payload) => ({
    type:FETCH_TOILET_SUCCESS,
    payload
})
export const fetchToilet = () => ({
    type:FETCH_TOILET,
})
export const fetchShower = () => ({
    type:FETCH_SHOWER,
})
export const fetchPlaces = () => ({
    type: FETCH_PLACES,
});

export const fetchPlacesSuccess = (payload) => ({
    type: FETCH_PLACES_SUCCESS,
    payload,
});

