import React, { useEffect, useRef } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
// import { Icon } from "leaflet";
import './style.css';
import * as parkData from '../../data/skateboard-parcks.json';
import { useSelector } from 'react-redux'
import * as ELG from "esri-leaflet-geocoder";
  
import L from 'leaflet';
import userLocationURL from './map-pin-solid.svg';

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [33, 35]
});

const MapContainer = ({userLocation, lat, long, isLocated}) => {

  //const map = L.map('map');
  //const [map, setMap] = React.useState(null)
  //const map = this.mapRef.current.leafletElement;
  //const results = new L.LayerGroup().addTo(map);
  const mapRef = useRef()
  console.log('mapref', mapRef);
  //    const searchControl = new ELG.Geosearch().addto(mapRef.current);
  // searchControl.on("results", function(data) {
  //   //results.clearLayers();
  //   // for (let i = data.results.length - 1; i >= 0; i--) {
  //   //   results.addLayer(L.marker(data.results[i].latlng));
  //   // }
  // });

  const getLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log('erreur !!')
    }
  }
  
  const showPosition = (position) => {
    console.log('show position', position.coords);
    userLocation(position.coords)
  }

  useEffect(() => {
     getLocation()
  },[]);
console.log('longlat', lat , long, isLocated)
  const [activePark, setActivePark] = React.useState(null);
  const map = (
    <Map center={[lat, long]} zoom={isLocated ? 12 : 6} 
    ref={mapRef} 
    >
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
    </Map>)
 
  return (
    <div className="map" id="mapid">
    {map}
    </div>
  );
};

export default MapContainer;
