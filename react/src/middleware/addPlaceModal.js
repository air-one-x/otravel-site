import axios from 'axios';
import { ADD_PLACE } from '../actions/geolocation';

export default (store) => (next) => (action) => {
    switch(action.type) {
        case ADD_PLACE: 
        console.log('JE VOIS L AJOUT DUN LIEU ');
        axios({
            method: 'post',
            url: 'http://localhost:8001/places/add',
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
            data: {
              name: store.getState().geolocation.form.name,
              category: store.getState().geolocation.form.category,
              descirption: store.getState().geolocation.form.description,
              street: store.getState().geolocation.form.street,
              zipCode: store.getState().geolocation.form.zipCode.toString(),
              city: store.getState().geolocation.form.city,
              lat: store.getState().geolocation.coords.lat,
              lng: store.getState().geolocation.coords.long
            },
          }).then((res) => {
            // Si succès -> dispatcher une action success
            console.log('FELICITATION GAETAN', res);
          })
            .catch((err) => {
            // Si error -> Dispatcher une action error
              console.error(err);
            });
        break;
        default :
        next(action);
    };
};