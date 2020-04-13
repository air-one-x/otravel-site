import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const AddPlace = () => {


return (
    <div className="add--place">
       <FontAwesomeIcon icon={faPlus} className="add--place__button" />
    </div>
);
}

export default AddPlace;