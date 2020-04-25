import axios from 'axios';
import { ADD_PLACE, SEND_ADRESS, convertAdress } from '../actions/geolocation';
import {isEmpty} from 'lodash'

export default (store) => (next) => (action) => {
    switch(action.type) {
        case ADD_PLACE: 
        console.log('JE VOIS L AJOUT DUN LIEU ');
        const formLatitude = () => {
          if (!isEmpty(store.getState().placesReducer.locationPlace)) {
            return store.getState().placesReducer.locationPlace.lat;
          } else {
            return store.getState().placesReducer.geolocation.coords.lat;
          }
        }
        
      
        const formLongitude = () => {      
          if (!isEmpty(store.getState().placesReducer.locationPlace)) {
            return store.getState().placesReducer.locationPlace.lng;
          } else {
            return store.getState().placesReducer.geolocation.coords.long;
          }
        }

        axios({
            method: 'post',
            url: 'http://localhost:8001/places/add',
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
            data: {
              name: store.getState().geolocation.form.name,
              category: store.getState().geolocation.form.category,
              description: store.getState().geolocation.form.description,
              street: store.getState().geolocation.form.street,
              zipCode: store.getState().geolocation.form.zipCode.toString(),
              city: store.getState().geolocation.form.city,
              lat: formLatitude(),
              lng: formLongitude(),
              nameFile: '',
              adress: '1 rue ',
              place_picture: localStorage.getItem('picturePlace'),


            },
          }).then((res) => {
            // Si succès -> dispatcher une action success
            console.log('AJJJJJOUUUUUUT D UUUUNNN LIIEEEEUUUUU', res);
          })
            .catch((err) => {
            // Si error -> Dispatcher une action error
              console.error(err);
            });
            break;

            case SEND_ADRESS: 
            console.log('convertion en cours',store.getState().geolocation, store.getState().placesReducer );
            let data = {};
            if(!isEmpty(store.getState().placesReducer.locationPlace)){
              console.log('if')
              data = {
                lat: store.getState().placesReducer.locationPlace.lat,
                long: store.getState().placesReducer.locationPlace.lng
              }
            }else{
              data = store.getState().geolocation.coords
            }

            axios({
              method: 'post',
              url: 'http://localhost:8001/api/adress/places',
              withCredentials: true,
              headers: {'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
              data : {
                lat: data.long,
                lng: data.lat,              
              },
            })
          .then((res) => {
            console.log('VOICI L ADRESSE :', res.data.results[0].components);
            store.dispatch(convertAdress(res.data.results[0].components))
          })
          .catch((err) => {
            console.log(err);
          })
        break;
        default :
        next(action);
    };
};