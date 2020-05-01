import {GET_CAMERA, ADD_CAMERA} from '../actions/types';

const initialState = {
    cameras: [],
    initialCamera: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CAMERA:
            return {
                ...state,
                cameras: action.payload,
                initialCamera:true
            };
        case ADD_CAMERA:
            return {
                ...state,
                cameras: action.payload
            };
        default:
            return state;
    }
}
