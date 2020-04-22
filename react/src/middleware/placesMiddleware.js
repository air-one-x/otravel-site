import axios from 'axios';
import { FETCH_PLACES, fetchPlacesSuccess} from '../actions/places';

export default (store) => (next) => (action) => {
    console.log('Ais-je besoin de lancer une requete ?');
    switch (action.type) {
        case FETCH_PLACES:

        axios({
            method: 'get',
            url: 'http://localhost:8001/api/places',


        }).then((res) => {
            console.log('lieu a afficher requete réussi',res);
            store.dispatch(fetchPlacesSuccess(res.data));
        }).catch((err) => {
            console.log(err);
        });

        break;
        default:
            next(action);
    }
};
