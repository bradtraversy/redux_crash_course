import {GET_GEAR, ADD_GEAR, CURRENT_GEAR} from '../actions/types';

const initialState = {
    gears: [],
    initialGear: false,
    currentGear: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GEAR:
            return {
                ...state,
                gears: action.payload,
                initialGear: true
            };
        case ADD_GEAR:
            return {
                ...state,
                gears: action.payload
            };
        case CURRENT_GEAR:
            return {
                ...state,
                currentGear: action.payload
            };
        default:
            return state;
    }
}
