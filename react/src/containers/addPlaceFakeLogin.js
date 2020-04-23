import { connect } from 'react-redux';
import formLoginModalAddPlace from '../modal/addPlaceFake';
import { changeEmail, changePassword, login } from '../actions/connexion';

const mapStateTopProps = (state) => ({
  userEmail: state.user.form.email,
  userPassword: state.user.form.password,
  isLoggedUser: state.user.isLogged,
  loginError: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (event) => dispatch(changeEmail(event)),
  changePassword: (event) => dispatch(changePassword(event)),
  login: () => dispatch(login()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(formLoginModalAddPlace);