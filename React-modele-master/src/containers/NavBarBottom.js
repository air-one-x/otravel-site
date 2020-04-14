import { connect } from 'react-redux';
import NavBarBottom from '../components/NavBarBottom/index';

const mapStateToProps = (state) => ({
    toto: state.NavButtons.value
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarBottom);