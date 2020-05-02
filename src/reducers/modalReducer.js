import {TOGGLE_LOGIN, TOGGLE_SIGNUP,TOGGLE_UPLOAD} from '../actions/types';

const initialState = {
    isLogin: false,
    signUp: false,
    upload: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            };
        case TOGGLE_SIGNUP:
            return {
                ...state,
                signUp: !state.signUp
            };
        case TOGGLE_UPLOAD:
            return {
                ...state,
                upload: !state.upload
            };
        default:
            return state;
    }
}
