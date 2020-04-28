import { connect } from 'react-redux';
import mapContainer from '../components/MapContainer';
import { geolocation } from '../actions/geolocation';
import { fetchPlaces, fetchShower, fetchToilet, addLocationPlace, idClickPlace } from '../actions/places';

const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
    list: state.placesReducer.list,
    listShower: state.placesReducer.listShower,
    listToilet: state.placesReducer.listToilet,
    isFilterShower: state.placesReducer.isFilterShower,
    isFilterToilet: state.placesReducer.isFilterToilet,
    newList: state.placesReducer.newList,
    isLogged: state.user.isLogged,
    clickLocation: state.placesReducer.locationPlace
});

const mapDispatchToProps = (dispatch) => ({
    userLocation: (position) => {
        dispatch(geolocation(position));
    },
    fetchPlaces: () => {
        dispatch(fetchPlaces());
        dispatch(fetchShower());
        dispatch(fetchToilet());
    },
    addLocationPlace: (position) => {
        dispatch(addLocationPlace(position));
     },
    idClickPlace: (idPlace) => {
        dispatch(idClickPlace(idPlace));
     }
});

export default connect(mapStateToProps, mapDispatchToProps)(mapContainer);
