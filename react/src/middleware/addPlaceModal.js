import { ADD_PLACE } from '../actions/geolocation';

export default (store) => (next) => (action) => {
    switch(action.type) {
        case ADD_PLACE: 
        console.log('JE VOIS L AJOUT DUN LIEU ');
        break;
        default :
        next(action);
    };
};