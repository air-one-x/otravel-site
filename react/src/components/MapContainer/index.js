import React, { useEffect, useState } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import './style.css';
import ReactLeafletSearch from "react-leaflet-search";
import L from 'leaflet';
import userLocationURL from './map-pin-solid.svg';
import NavBar from '../../containers/navBarFake';
import AddPlaceButton from '../../containers/AddPlaceButtonContainer'

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [33, 35],
});

const MapContainer = ({
  viewport,
  userLocation,
  lat,
  long,
  isLocated,
  fetchPlaces,
  list,
  newList,
  isFilterShower,
  isFilterToilet,
  setViewport,
  isLogged,
  addLocationPlace, } ) => {



  const [activePlace, setActivePlace] = useState(null);
  const [latMarker, setlatMarker] = useState(0);
  const [lngMarker, setlngMarker] = useState(0);
  const [markerClick, setMarkerClick] = useState(false);
  const [activePopupMarkerClick, setActivePopupMarkerClick] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  const showPosition = (position) => {
    setViewport({center:[position.coords.latitude, position.coords.longitude], zoom: 10})
    userLocation(position.coords)
  }

  const onClickMap = (event) => {
    console.log('click sur la map', event)
    setMarkerClick(true);
    setlatMarker(event.latlng.lat),
    setlngMarker(event.latlng.lng)
  }

  const activeMarkerPopup = (event) => {
    setActivePopupMarkerClick(event.latlng)
    addLocationPlace(event.latlng)
  }


  useEffect(() => {
     getLocation()

  },[]);

  useEffect(fetchPlaces,[]);

  return (
    <div>
      <NavBar />
      <div className="map" id="mapid">
        <Map viewport={viewport} minZoom="3" onClick={onClickMap} >
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
           
          {
            markerClick &&(
            <Marker
              position={[latMarker, lngMarker]}
              icon={myIcon}
              onClick={activeMarkerPopup}
            >
            </Marker>)
          }
          {isLocated &&(
            <Marker
              position={[lat, long]}
              icon={myIcon}
            >
            </Marker>)
          }
          {
            isFilterShower && newList.map((place) => (
              <Marker
                key={place.id}
                position={[
                  place.lat,
                  place.lat,
                ]}
                onClick={() => {
                  setActivePlace(place),
                  setViewport({center:[place.lat, place.lng]})
                }}
              />
            ))
          }
          {
            isFilterToilet && newList.map((place) => (
              <Marker
                key={place.id}
                position={[
                  place.lat,
                  place.lng,
                ]}
                onClick={() => {
                  setActivePlace(place),
                  setViewport({center:[place.lat, place.lng]})
                }}
              />
            ))
          }
          {!isFilterShower && !isFilterToilet && list.map((place) => (
            <Marker
              key={place.id}
              position={[
                place.lat,
                place.lng,
              ]}
              onClick={() => {
                setActivePlace(place);
                setViewport({center:[place.lat, place.lng]})
              }}
            />
          ))
          }
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
          {activePopupMarkerClick && (
            <Popup
              position={[
                activePopupMarkerClick.lat,
                activePopupMarkerClick.lng,
              ]}
              onClose={() => {
                setActivePopupMarkerClick(null);
              }}
            >
              <div>
              <AddPlaceButton isLogged={isLogged}/>
              </div>
            </Popup>
            )}

        </Map>
      </div>
    </div>
  );
  
};

export default MapContainer;