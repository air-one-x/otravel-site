import React from 'react' ;
import FilterPlaceModal from '../../../modal/filterPlaceModal';
import './style.css';


const FilterPlace = ({buttonFilter, handleFilter, cancelFilter}) => {
    return(
    <div className="filter">
      <FilterPlaceModal />
    </div>
  );
};

export default FilterPlace;