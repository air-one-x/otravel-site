import { connect } from 'react-redux';
import FilterPlace from '../components/NavBarBottom/FilterPlace';
import {activeButtonFilter, removeFilter} from '../actions';

const mapStateToProps = (state) => ({
    buttonFilter: state.NavButtons
});

const mapDispatchToProps = (dispatch) => ({
    handleFilter : () => dispatch(activeButtonFilter()),
    cancelFilter : () => dispatch(removeFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlace);