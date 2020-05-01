import {combineReducers} from 'redux';
import postReducer from './postReducer';
import modalReducer from './modalReducer';
import cameraReducer from "./cameraReducer";

export default combineReducers({
    posts: postReducer,
    modal: modalReducer,
    cameras: cameraReducer
});
