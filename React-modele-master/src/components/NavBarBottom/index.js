import React from 'react';
import AddPlace from './AddPlace';
import FilterPlace from './FilterPlace';
import LocalisationButton from './LocalisationButton';
import style from './style.css';


const NavBarBottom = () => (
    <div className="nav--bar--bottom"> 
       <FilterPlace />
       <AddPlace />
       <LocalisationButton />
    </div>
);

export default NavBarBottom;