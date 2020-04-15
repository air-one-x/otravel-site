import { connect } from 'react-redux';
import formLoginModal from '../modal/formLoginModal';
import { changeEmail, changePassword } from '../actions';

const mapStateTopProps = (state) => ({
  userEmail: state.user.email,
  userPassword: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (event) => dispatch(changeEmail(event)),
  changePassword: (event) => dispatch(changePassword(event)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(formLoginModal);
