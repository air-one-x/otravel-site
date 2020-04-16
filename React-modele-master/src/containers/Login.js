import { connect } from 'react-redux';
import formLoginModal from '../modal/formLoginModal';
import { changeEmail, changePassword, login } from '../actions/connexion';

const mapStateTopProps = (state) => ({
  userEmail: state.user.form.email,
  userPassword: state.user.form.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (event) => dispatch(changeEmail(event)),
  changePassword: (event) => dispatch(changePassword(event)),
  login: () => dispatch(login()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(formLoginModal);
