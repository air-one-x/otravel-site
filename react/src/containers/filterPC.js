import { connect } from 'react-redux';
import { isFilterShower, checkFilter, removeShower, removeToilet, isFilterToilet} from '../actions/places';
import FilterPc from '../modal/filterPC';

const mapStateToProps = (state) => ({
    isFilterShower: state.placesReducer.isFilterShower,
    isFilterToilet: state.placesReducer.isFilterToilet,
    places: state.placesReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
    changeIsFilterShower: ()=> dispatch(isFilterShower()),
    checkFilter: () =>dispatch(checkFilter()),
    removeShower: () => dispatch(removeShower()),
    removeToilet: () => dispatch(removeToilet()),
    changeIsFilterToilet: () => dispatch(isFilterToilet())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPc);