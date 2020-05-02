import {GET_USER, ADD_USER, CURRENT_USER} from '../actions/types';

const initialState = {
    users: [],
    initialUser: false,
    currentUser:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload,
                initialUser: true
            };
        case ADD_USER:
            return {
                ...state,
                users: action.payload
            };
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}
