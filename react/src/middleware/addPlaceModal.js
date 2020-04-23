import axios from 'axios';
import { ADD_PLACE, SEND_ADRESS, convertAdress } from '../actions/geolocation';

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
              lng: store.getState().geolocation.coords.long,
              nameFile: '',
              adress: '1 rue ',
              places_picture: localStorage.getItem('picturePlace'),


            },
          }).then((res) => {
            // Si succès -> dispatcher une action success
            console.log('AJJJJJOUUUUUUT D UUUUNNN LIIEEEEUUUUU', res);
          })
            .catch((err) => {
            // Si error -> Dispatcher une action error
              console.error(err);
            });

            case SEND_ADRESS: 
            console.log('convertion en cours');
            axios({
              method: 'post',
              url: 'http://localhost:8001/api/adress/places',
              withCredentials: true,
              headers: {'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
              data : {
                lat: store.getState().geolocation.coords.long,
                lng: store.getState().geolocation.coords.lat,              
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
        break;
        default :
        next(action);
    };
};