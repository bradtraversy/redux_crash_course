import {GET_CAMERA, ADD_CAMERA, CURRENT_CAMERA} from '../actions/types';

const initialState = {
    cameras: [],
    initialCamera: false,
    currentCamera:{}
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
        case CURRENT_CAMERA:
            return {
                ...state,
                currentCamera: action.payload
            };
        default:
            return state;
    }
}
