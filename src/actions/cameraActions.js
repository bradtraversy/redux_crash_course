import {ADD_CAMERA, GET_CAMERA} from "./types";
import {cameras} from '../Constants/data'

export const getCameras = () => dispatch => {
    dispatch({type: GET_CAMERA, payload: cameras})
}
