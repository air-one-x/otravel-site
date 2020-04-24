import React from 'react';
import AddPlace from '../../containers/AddPlace';
import FilterPlace from '../../modal/filterPC';
import LocalisationButton from './LocalisationButton';
import NavigationIcon from '@material-ui/icons/Navigation';
import './style.css';
import FormLoginModal from '../../containers/addPlaceFakeLogin';

const NavBarBottom = (props) => {
    
    const { isLogged, onClick,} = props

    return(
        <div className="nav--bar--bottom">
            <div className="mobile--buttons">
                <FilterPlace />
                {isLogged === true ? <AddPlace /> : <FormLoginModal /> }
                <LocalisationButton 
                onClick={onClick}
                />
            </div>
            <div className="localisation--button--desktop">
            <LocalisationButton 
            onClick={onClick}
            />
            </div>
        </div>
    );
};

export default NavBarBottom;