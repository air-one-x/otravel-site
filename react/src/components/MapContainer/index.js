import React, { useEffect, useState } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import './style.css';
import ReactLeafletSearch from "react-leaflet-search";
import L from 'leaflet';
import NavBar from '../../containers/navBarFake';
import AddPlaceButton from '../../containers/AddPlaceButtonContainer';
import { isEmpty } from 'lodash';
import userLocationURL from './pinBlue.svg';
import newLocation from './pin.svg';
import PopupNavBar from '../popupNavBar/popupNavBar';
import IconForShower from './shower-icon.svg';
import IconToilet from './wc.png';

const myIcon = L.icon({
  iconUrl: newLocation,
  iconUrl: userLocationURL,
  iconSize: [33, 35],
});

const newPointIcon = L.icon({
  iconSize: [33, 35],
  iconUrl: newLocation,
  marginTop: '90px',
});

const showerIcon = L.icon({
  iconUrl: IconForShower,
  iconSize: [20, 23],
});

const toiletIcon = L.icon({
  iconUrl: IconToilet,
  iconSize: [20, 23],
  
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
  addLocationPlace, idClickPlace } ) => {



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
  
  const clickMarkerID = (event) => {
    console.log('CHERCHE ID PLACE', event);
    idClickPlace(event)

  }

//const urlImg = `http://localhost:8001/${activePlace.places_picture.name}`;
  useEffect(() => {
     getLocation()

  },[]);

  useEffect(fetchPlaces,[]);

  return (
    <div>
      <NavBar />
      <div className="map" id="mapid">
        <Map viewport={viewport} minZoom="5" onClick={onClickMap} >
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
            openSearchOnLoad={true} // By default there's a search icon which opens the input when clicked. Setting this to true opens the search by default.
            closeResultsOnClick={false} // By default, the search results remain when you click on one, and the map flies to the location of the result. But you might want to save space on your map by closing the results when one is clicked. The results are shown again (without another search) when focus is returned to the search input.
            providerOptions={{searchBounds: []}} // The BingMap and OpenStreetMap providers both accept bounding coordinates in [se,nw] format. Note that in the case of OpenStreetMap, this only weights the results and doesn't exclude things out of bounds.
            customProvider={undefined | {search: (searchString)=> {}}} // see examples to usage details until docs are ready
            providerOptions={{ region: "fr" }}
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
              icon={newPointIcon}
            >
            </Marker>)
          }
          {
            isFilterShower && newList.map((test1) => (
              <Marker
              icon={test1.Category[0].name === 'douche' ? showerIcon : toiletIcon}
                key={test1.id}
                position={[
                  test1.lat,
                  test1.lng,
                ]}
                onClick={() => {
                  setActivePlace(test1),
                  setViewport({center:[test1.lat, test1.lng]}),
                  clickMarkerID(test1.id)
                }}
              />
            ))
          }
          {
            isFilterToilet && newList.map((test2) => (
              <Marker
              icon={test2.Category[0].name === 'douche' ? showerIcon : toiletIcon}
                key={test2.id}
                position={[
                  test2.lat,
                  test2.lng,
                ]}
                onClick={() => {
                  setActivePlace(test2),
                  setViewport({center:[test2.lat, test2.lng]}),
                  clickMarkerID(test2.id)
                }}
              />
            ))
          }
          {!isFilterShower && !isFilterToilet && list.map((place) => (
            <Marker
              key={place.id}
              icon={place.Category[0].name === 'douche' ? showerIcon : toiletIcon}
              position={[
                place.lat,
                place.lng,
              ]}
              onClick={() => {
                setActivePlace(place);
                setViewport({center:[place.lat, place.lng]}),
                clickMarkerID(place.id)
              }}
            />
          ))
          }

          {activePlace && (
          <Popup
            className="popup"
            style={{width:'50%'}}
            position={[
              activePlace.lat,
              activePlace.lng,
            ]}
            onClose={() => {
              setActivePlace(null);
            }}
          >
            <div>
              <h2>Nom : {activePlace.name}</h2>
              <div>
                {isEmpty(activePlace.places_picture) ? "" : <img style={{ width:'50%' }} src={`http://localhost:8001/${activePlace.places_picture.name}`} />}
              </div>
              <div>
                <p>Adresse : {activePlace.street}</p>
                <p>{activePlace.city} {activePlace.zipcode}</p>
                <p>Description: {activePlace.description}</p>
                <p>Ajouté par : {activePlace.user.username}</p>
              </div>
              <div>
                <PopupNavBar placeInfos={activePlace} isLogged={isLogged} />
              </div>
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