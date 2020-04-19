import { connect } from 'react-redux';
import App from '../components/App';

import { checkAuth } from '../actions/connexion';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => {
        console.log('checkAuth');
        dispatch(checkAuth());
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);