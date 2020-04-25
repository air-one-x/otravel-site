import { connect } from 'react-redux';
import AddPlaceButtonComponent from '../components/AddPlaceButton/addPlaceButtonComponent';
import { sendAdress } from '../actions/geolocation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    sendAdress: () => dispatch(sendAdress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceButtonComponent);