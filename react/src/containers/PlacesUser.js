import { connect } from 'react-redux';
import PlacesUser from '../components/Account/PlacesUser';
import { informationUser } from '../actions/account';


const mapStateToProps = (state) => ({
  places: state.user.userInfos.Places,
  isLogged: state.user.isLogged,
  allPlaces: state.placesReducer.list,
  user: state.user.userInfos,
  isInfos: state.user.isInfos
});

const mapDispatchToProps = (dispatch) => ({
  checkInfos: () => dispatch(informationUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(PlacesUser);