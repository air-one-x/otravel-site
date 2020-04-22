import { connect } from 'react-redux';
import InformationsUser from '../components/Account/InformationsUser';

const mapStateToProps = (state) => ({
    username: state.user.userInfos.username,
    email: state.user.userInfos.email,
    date: state.user.userInfos.created_at,
    contributions: state.user.userInfos.Places
});

const mapDispatchToProps = {} ;

export default connect(mapStateToProps, mapDispatchToProps)(InformationsUser);