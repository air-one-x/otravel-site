import { connect } from 'react-redux';
import mapContainer from '../components/MapContainer';
import { geolocation } from '../actions/geolocation';
import { fetchPlaces } from '../actions/places';

const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
    list: state.placesReducer.list,
    isFilterShower: state.placesReducer.isFilterShower,
    isFilterToilet: state.placesReducer.isFilterToilet,
    newList: state.placesReducer.newList
});

const mapDispatchToProps = (dispatch) => ({
    userLocation: (position) => {
        dispatch(geolocation(position));
    },
    fetchPlaces: () => {
        dispatch(fetchPlaces());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(mapContainer);
