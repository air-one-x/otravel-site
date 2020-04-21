import { connect } from 'react-redux';
import AddPlaceModal from '../modal/addPlaceModal';
import {cityPlace, zipCodePlace, streetPlace, categoryPlace, namePlace , descriptionPlace} from '../actions/geolocation';


const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
    name: state.geolocation.form.name,
    category: state.geolocation.form.category,
    description: state.geolocation.form.description,
    zipCode: state.geolocation.form.zipCode,
    city: state.geolocation.form.city,
    street: state.geolocation.form.street,
});

const mapDispatchToProps = (dispatch) => ({
    addNamePlace: (event) =>  dispatch(namePlace(event)),
    addCategoryPlace: (event) =>  dispatch(categoryPlace(event)),
    addDescriptionPlace: (event) =>  dispatch(descriptionPlace(event)),
    addZipCodePlace: (event) =>  dispatch(zipCodePlace(event)),
    addCityPlace: (event) =>  dispatch(cityPlace(event)),
    addStreetPlace: (event) =>  dispatch(streetPlace(event)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceModal);