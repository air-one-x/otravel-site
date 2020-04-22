import React, { useEffect } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
// import { Icon } from "leaflet";
import './style.css';
import * as parkData from '../../data/skateboard-parcks.json';
import ReactLeafletSearch from "react-leaflet-search";
import L from 'leaflet';
import userLocationURL from './map-pin-solid.svg';


const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [33, 35]
});

const MapContainer = ({userLocation, lat, long, isLocated}) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log('erreur !!')
    }
  }
  
  const showPosition = (position) => {
    console.log('show position', position.coords.latitude);
    userLocation(position.coords)
  }

  useEffect(() => {
     getLocation()
  },[]);
console.log('longlat', lat , long, isLocated)
  const [activePark, setActivePark] = React.useState(null);


  return (
    <div>
    <NavBar />
    <div className="map" id="mapid">
      <Map center={[lat, long]} zoom={isLocated ? 12 : 6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <ReactLeafletSearch
    position="topright"
    inputPlaceholder="The default text in the search bar"
    search={[]} // Setting this to [lat, lng] gives initial search input to the component and map flies to that coordinates, its like search from props not from user
    zoom={12} // Default value is 10
    showMarker={true}
    showPopup={false}
    openSearchOnLoad={false} // By default there's a search icon which opens the input when clicked. Setting this to true opens the search by default.
    closeResultsOnClick={false} // By default, the search results remain when you click on one, and the map flies to the location of the result. But you might want to save space on your map by closing the results when one is clicked. The results are shown again (without another search) when focus is returned to the search input.
    providerOptions={{searchBounds: []}} // The BingMap and OpenStreetMap providers both accept bounding coordinates in [se,nw] format. Note that in the case of OpenStreetMap, this only weights the results and doesn't exclude things out of bounds.
    customProvider={undefined | {search: (searchString)=> {}}} // see examples to usage details until docs are ready
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
    </div>
  );
  
};

export default MapContainer;