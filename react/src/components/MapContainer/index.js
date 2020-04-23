import React, { useEffect, useState } from 'react';
import {
  Map, Marker, Popup, TileLayer,Viewport,
} from 'react-leaflet';
// import { Icon } from "leaflet";
import './style.css';
import ReactLeafletSearch from "react-leaflet-search";
import L from 'leaflet';
import userLocationURL from './map-pin-solid.svg';
import NavBar from '../../containers/navBarFake';




const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [33, 35]
});
const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 6,
}
const MapContainer = ({userLocation, lat, long, isLocated, fetchPlaces, list}) => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)
  const getLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log('erreur !!')
    }
  }
  console.log(fetchPlaces);
  const showPosition = (position) => {
    console.log('show position', position.coords.latitude);
    setViewport({center:[position.coords.latitude, position.coords.longitude], zoom: 10})
    userLocation(position.coords)
  }

  useEffect(() => {
     getLocation()

  },[]);
  useEffect(fetchPlaces,[]);

console.log('longlat', viewport)
  const [activePlace, setActivePlace] = React.useState(null);
  const onClickReset = () => {
    setViewport({center:[lat, long], zoom: 10})
  }
  
  const onViewportChanged = (Viewport) => {
    setViewport(Viewport)
  }

  return (
    <div>
    <NavBar />
    <div className="map" id="mapid">
      <Map onClick={onClickReset}
      viewport={viewport}
      onViewportChanged={onViewportChanged}>
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
        {list.map((place) => (
          <Marker
            key={place.id}
            position={[
              place.lat,
              place.lng,
            ]}
            onClick={() => {
              setActivePlace(place);
            }}
          />
        ))}
        {activePlace && (
        <Popup
          position={[
            activePlace.lat,
            activePlace.lng,
          ]}
          onClose={() => {
            setActivePlace(null);
          }}
        >
          <div>
            <h2>{activePlace.name}</h2>
            <p>{activePlace.user.username}</p>
          </div>
        </Popup>
        )}
      </Map>
    </div>
    </div>
  );
  
};

export default MapContainer;