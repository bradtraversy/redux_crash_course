import {LOGIN, LOGOUT} from '../actions/types';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('user',JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,

            };
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                user: {},
                loggedIn:false
            };
        default:
            return state;
    }
}
