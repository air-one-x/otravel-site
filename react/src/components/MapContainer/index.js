import React, { useEffect } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
// import { Icon } from "leaflet";
import './style.css';
import * as parkData from '../../data/skateboard-parcks.json';
import { useSelector } from 'react-redux';

import L from 'leaflet';
import userLocationURL from './map-pin-solid.svg';

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [33, 35]
});

const MapContainer = ({userLocation, lat, long, isLocated}) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      console.log('test',navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log('erreur !!')
    }
  }
  
  const showPosition = (position) => {
    console.log('show position', position);
    userLocation(position.coords)
  }

  useEffect(() => {
     getLocation()
  },[]);
console.log('longlat', lat , long, isLocated)
  const [activePark, setActivePark] = React.useState(null);
  return (
    <div className="map" id="mapid">
      <Map center={[lat, long]} zoom={isLocated ? 12 : 6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       {isLocated &&(
        <Marker
          position={[lat, long]}
           icon={myIcon}
        >
        </Marker>)
      }
        
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            onClick={() => {
              setActivePark(park);
            }}
          />
        ))}
        {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0],
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapContainer;