import { connect } from 'react-redux';
import { isFilterShower, isFilterToilet, isFilterSpotKite, isFilterSpotVan } from '../actions/places';
import FilterPc from '../modal/filterPC';

const mapStateToProps = (state) => ({
    isFilterShower: state.placesReducer.isFilterShower,
    isFilterToilet: state.placesReducer.isFilterToilet,
    isFilterSpotKite: state.placesReducer.isFilterSpotKite,
    isFilterSpotVan: state.placesReducer.isFilterSpotVan,
    places: state.placesReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
    changeIsFilterShower: ()=> dispatch(isFilterShower()),
    changeIsFilterToilet: () => dispatch(isFilterToilet()),
    changeIsFilterSpotKite: () => dispatch(isFilterSpotKite()),
    changeIsFilterSpotVan: () => dispatch(isFilterSpotVan())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPc);