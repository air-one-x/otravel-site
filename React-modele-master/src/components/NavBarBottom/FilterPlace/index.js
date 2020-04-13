import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './style.css';


const FilterPlace = () => (
    <div className="filter">
      <FontAwesomeIcon icon={faFilter} className="filter__button" />
    </div>
);

export default FilterPlace;