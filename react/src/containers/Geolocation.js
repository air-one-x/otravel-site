import { connect } from 'react-redux';
import mapContainer from '../components/MapContainer';
import { geolocation } from '../actions/geolocation';

// const mapStateToProps = null;

const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
});

const mapDispatchToProps = (dispatch) => ({
    // geolocation: () => dispatch(geolocation()),
    userLocation: (position) => {
        console.log('geolocation');
        dispatch(geolocation(position));
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(mapContainer);
