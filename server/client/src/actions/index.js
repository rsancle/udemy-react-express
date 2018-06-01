import axios from 'axios';
import { FETCH_USER } from  './types';

/* using old promises
export const fetchUser = () => {
    return dispatch => {
        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER,
                payload: res
            })
         );
    }
}*/

// Refactored using new syntax
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({
        type: FETCH_USER,
        payload: res
    });
}
