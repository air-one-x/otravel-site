import { connect } from 'react-redux';
import NavBar from '../components/Navbar/itemsMenu';

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);