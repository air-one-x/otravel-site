import { connect } from 'react-redux';
import { changeNewEmail, changeNewPassword, changeNewPseudo, inscriptionSuccess, addAvatar, addNamePictureAvatar} from '../actions/inscription';
import inscriptionModal from '../modal/inscriptionModal';

const mapStateToProps = (state) => ({
  newUserPseudo: state.userInscription.form.pseudo,
  newUserAvatar: state.userInscription.form.avatar,
  newUserEmail: state.userInscription.form.email,
  newUserPassword: state.userInscription.form.password,
});

const mapDispatchToProps = (dispatch) => ({
    inputChangeEmailInscription: (event) => dispatch(changeNewEmail(event)),
    pictureAvatarInscription: (event) => dispatch(addAvatar(event)),
    fileNameAvatarInscription: (event) => dispatch(addNamePictureAvatar(event)),
    inputChangePseudoInscription: (event) => dispatch(changeNewPseudo(event)),
    inputChangePasswordInscription: (event) => dispatch(changeNewPassword(event)),
    insertNewUser: () =>dispatch(inscriptionSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(inscriptionModal);