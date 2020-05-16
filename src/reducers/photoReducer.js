import {GET_PHOTO, ADD_PHOTO} from '../actions/types';

const initialState = {
    photos: [],
    initialPhoto: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PHOTO:
            return {
                ...state,
                photos: action.payload,
                initialPhoto:true
            };
        case ADD_PHOTO:
            return {
                ...state,
                photos: action.payload
            };
        default:
            return state;
    }
}
