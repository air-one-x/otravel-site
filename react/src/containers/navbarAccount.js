import { connect } from 'react-redux';
import Account from '../components/Navbar/account';
import { informationUser } from '../actions/account';

const mapStateToProps = (state) => ({
    isInfos: state.user.isInfos,
});

const mapDispatchToProps = (dispatch) => ({
    checkInfos: () => dispatch(informationUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);