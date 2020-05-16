import {combineReducers} from 'redux';
import postReducer from './postReducer';
import modalReducer from './modalReducer';
import cameraReducer from "./cameraReducer";
import userReducer from "./userReducer";
import gearReducer from "./gearReducer";
import photoReducer from "./photoReducer";
import authReducer from './authReducer'

export default combineReducers({
    posts: postReducer,
    modal: modalReducer,
    cameras: cameraReducer,
    photos:photoReducer,
    gears:gearReducer,
    users:userReducer,
    auth:authReducer

});
