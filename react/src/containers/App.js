import { connect } from 'react-redux';
import App from '../components/App';

import { checkAuth } from '../actions/connexion';
//  import { geolocation } from '../actions/geolocation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => {
        console.log('checkAuth');
        dispatch(checkAuth());
      },
    // geolocation: () => {
    //   console.log('geolocation');
    //   dispatch(geolocation());
    // },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);