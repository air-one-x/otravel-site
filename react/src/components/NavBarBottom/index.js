import React from 'react';
import AddPlace from '../../containers/AddPlace';
import FilterPlace from '../../modal/filterPC';
import LocalisationButton from './LocalisationButton';
import NavigationIcon from '@material-ui/icons/Navigation';
import './style.css';
import FormLoginModal from '../../containers/addPlaceFakeLogin';
import AddPlaceButtonComponent from '../AddPlaceButton/addPlaceButtonComponent';
import AddPlaceButton from '../../containers/AddPlaceButtonContainer'

const NavBarBottom = (props) => {
    
    const { isLogged, onClick,} = props

    return(
        <div className="nav--bar--bottom">
            <div className="mobile--buttons">
                <FilterPlace />
                    <AddPlaceButton isLogged={isLogged}/>
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