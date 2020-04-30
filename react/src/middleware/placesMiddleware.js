import axios from 'axios';
import { FETCH_PLACES, fetchPlacesSuccess, CHECK_FILTER, addFilter, REMOVE_SHOWER, removeFilterShower, removeFilterToilet, REMOVE_TOILET} from '../actions/places';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_PLACES:

        axios({
            method: 'post',
            url: 'http://ec2-3-85-160-178.compute-1.amazonaws.com/api/places',

        }).then((res) => {
            store.dispatch(fetchPlacesSuccess(res.data));
        }).catch((err) => {
        });

        break;

        case CHECK_FILTER:

            axios({
                method: 'post',
                url: `http://ec2-3-85-160-178.compute-1.amazonaws.com/api/category/places/${store.getState().placesReducer.filter}`,
    
            }).then((res) => {
                store.dispatch(addFilter(res.data));
            }).catch((err) => {
            });
    
        break;

        case REMOVE_SHOWER:

                const showers = store.getState().placesReducer.newList;
                const resultShower = showers.filter((shower) => shower.Category[0].name != 'douche' );
                store.dispatch(removeFilterShower(resultShower))

            break;

        case REMOVE_TOILET :

            const toilets = store.getState().placesReducer.newList;
            const resultToilet = toilets.filter((toilet) => toilet.Category[0].name != 'toilette' );
            store.dispatch(removeFilterToilet(resultToilet))

        break; 
        default:
            next(action);
    }
};
