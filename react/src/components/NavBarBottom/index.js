import React from 'react';
import AddPlace from '../../containers/AddPlace';
import FilterPlace from './FilterPlace';
import LocalisationButton from './LocalisationButton';
import NavigationIcon from '@material-ui/icons/Navigation';
import style from './style.css';


const NavBarBottom = () => {
        return(
            <div className="nav--bar--bottom">
                <div className="mobile--buttons">
                    <FilterPlace />
                    <AddPlace />
                    <LocalisationButton />
                </div>
                <div className="localisation--button--desktop">
                   <NavigationIcon color="primary" />
                </div>
            </div>
        );
};
export default NavBarBottom;