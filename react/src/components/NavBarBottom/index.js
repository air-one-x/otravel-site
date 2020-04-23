import React from 'react';
import AddPlace from '../../containers/AddPlace';
import FilterPlace from '../../modal/filterPC';
import LocalisationButton from './LocalisationButton';
import NavigationIcon from '@material-ui/icons/Navigation';
import './style.css';
import FormLoginModal from '../../containers/addPlaceFakeLogin';



const NavBarBottom = ({isLogged}) => {
    console.warn('isLogged navbarbottom', isLogged);

    
        return(
            <div className="nav--bar--bottom">
                <div className="mobile--buttons">
                    <FilterPlace />
                    {isLogged === true ? <AddPlace /> : <FormLoginModal /> }
                    <LocalisationButton />
                </div>
                <div className="localisation--button--desktop">
                   <NavigationIcon color="primary" />
                </div>
            </div>
        );
};
export default NavBarBottom;