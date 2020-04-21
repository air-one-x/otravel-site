import { connect } from 'react-redux';
import AddPlaceModal from '../modal/addPlaceModal';
import {cityPlace, zipCodePlace, streetPlace, categoryPlace, namePlace , descriptionPlace, addPlace} from '../actions/geolocation';


const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
    namePlace: state.geolocation.form.name,
    categoryPlace: state.geolocation.form.category,
    descriptionPlace: state.geolocation.form.description,
    zipCodePlace: state.geolocation.form.zipCode,
    cityPlace: state.geolocation.form.city,
    streetPlace: state.geolocation.form.street,
});

const mapDispatchToProps = (dispatch) => ({
    addNamePlace: (event) =>  dispatch(namePlace(event)),
    addCategoryPlace: (event) =>  dispatch(categoryPlace(event)),
    addDescriptionPlace: (event) =>  dispatch(descriptionPlace(event)),
    addZipCodePlace: (event) =>  dispatch(zipCodePlace(event)),
    addCityPlace: (event) =>  dispatch(cityPlace(event)),
    addStreetPlace: (event) =>  dispatch(streetPlace(event)),
    addPlace: () => dispatch(addPlace()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceModal);