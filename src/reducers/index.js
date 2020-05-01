import {combineReducers} from 'redux';
import postReducer from './postReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    posts: postReducer,
    modal: modalReducer
});
