import axios from 'axios';
import { FETCH_PLACES, fetchPlacesSuccess, CHECK_FILTER, addFilter, REMOVE_SHOWER, removeFilterShower, removeFilterToilet, REMOVE_TOILET} from '../actions/places';

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

        case CHECK_FILTER:

            axios({
                method: 'post',
                url: `http://localhost:8001/api/category/places/${store.getState().placesReducer.filter}`,
    
            }).then((res) => {
                console.log('VOICI LA LISTE DES LIEUX PAR FILTRE',res);
                store.dispatch(addFilter(res.data));
            }).catch((err) => {
                console.log(err);
            });
    
        break;

        case REMOVE_SHOWER:

                console.log('-----------------------------------------------------');
                const showers = store.getState().placesReducer.newList;
                const resultShower = showers.filter((shower) => shower.name != 'douche' );
                store.dispatch(removeFilterShower(resultShower))
                console.log('------------------------------------------------------');

            break;

        case REMOVE_TOILET :

            console.log('-----------------------------------------------------');
            const toilets = store.getState().placesReducer.newList;
            const resultToilet = toilets.filter((toilet) => toilet.name != 'toilette' );
            console.log(resultToilet);
            store.dispatch(removeFilterToilet(resultToilet))
            console.log('------------------------------------------------------');

        break; 
        default:
            next(action);
    }
};
