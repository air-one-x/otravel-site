import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import Footer from '../../Footer';
import Places from './itemsPlaces';
import { v4 as uuid } from 'uuid';

const InformationsUser = ({places, isLogged, allPlaces, user, isInfos, checkInfos}) => {

  let nbPlaces;

       if(places.length != 0) {
      nbPlaces = true
  } else {
      nbPlaces = false;
  }
  



    return(
    <div className="places--user" style={isInfos == true ? {display:'block'}: {display: 'none'} } >
        {
           !isLogged && <Redirect to="/" />
         }
          <header>
              <div>O'Travel</div>
            <div onClick={checkInfos}>X</div>
        </header>

        <main>
            {
               nbPlaces&&places.map((place) => <Places place={place} allPlaces={allPlaces} user={user} key={uuid()} />)
            }
            {
                !nbPlaces&&<div style={{textAlign:'center', marginTop:'1rem'}}>Aucun lieux ajoutés</div>
            }
        </main>

    </div>
    );
};

InformationsUser.propTypes = {
    places: PropTypes.array,
}


export default InformationsUser;